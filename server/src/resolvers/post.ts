import { Post } from "../entities/Post";
import { Arg, Ctx, Int, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { MyContext } from "../utils/types";
import { isAuth } from "../middleware/isAuth";
import { getConnection } from "typeorm";

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  async posts(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null
  ) {
    const realLimit = Math.min(50, limit);
    const qb = getConnection()
      .getRepository(Post)
      .createQueryBuilder("p")
      .orderBy('"createdAt"', "DESC")
      .take(realLimit);

    if (cursor) {
      qb.where('"createdAt" < :cursor', { cursor: new Date(parseInt(cursor)) });
    }

    return qb.getMany();
  }

  @Query(() => Post, { nullable: true })
  post(@Arg("id") id: number) {
    const post = Post.findOne({ where: { id } });
    return post;
  }

  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  async createPost(@Arg("title") title: string, @Arg("text") text: string, @Ctx() { req }: MyContext) {
    const post = Post.create({ title, creatorID: req.session.userID, text }).save();
    return post;
  }

  @Mutation(() => Post, { nullable: true })
  async updatePost(@Arg("id") id: number, @Arg("title") title: string) {
    const isPost = await Post.findOne(id);
    if (!isPost) {
      return null;
    }
    if (typeof title !== undefined) {
      isPost.title = title;
      isPost.save();
    }
    return isPost;
  }

  @Mutation(() => Boolean)
  async deletePost(@Arg("id") id: number) {
    const post = await Post.delete(id);
    if (post.affected === 1) {
      return true;
    }
    return false;
  }
}
