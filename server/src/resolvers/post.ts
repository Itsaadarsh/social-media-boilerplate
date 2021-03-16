import { Post } from "../entities/Post";
import { Arg, Ctx, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { MyContext } from "../utils/types";
import { isAuth } from "../middleware/isAuth";

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts() {
    const posts = Post.find({});
    return posts;
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
