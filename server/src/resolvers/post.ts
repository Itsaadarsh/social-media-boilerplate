import { Post } from '../entities/Post';
import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import { MyContext } from '../utils/types';
import { isAuth } from '../middleware/isAuth';
import { getConnection } from 'typeorm';

@ObjectType()
class PaginatedPost {
  @Field(() => [Post])
  posts: Post[];

  @Field()
  hasMore: boolean;
}

@Resolver(Post)
export class PostResolver {
  @FieldResolver(() => String)
  textSnippet(@Root() root: Post) {
    return root.text.slice(0, 100);
  }

  @Query(() => PaginatedPost)
  async posts(
    @Arg('limit', () => Int) limit: number,
    @Arg('cursor', () => String, { nullable: true }) cursor: string | null
  ): Promise<PaginatedPost> {
    const realLimit = Math.min(50, limit);
    const replacements: any[] = [realLimit + 1];
    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
    }

    const posts = await getConnection().query(
      `
      SELECT post.id, post.title,post.text,post.points,post."createdAt",post."updatedAt",post."creatorID",
      json_build_object('id',public.user.id,'username',public.user.username,'email',public.user.email) creator
      FROM post
      INNER JOIN public.user ON post."creatorID" = public.user.id
      ${cursor ? `WHERE post."createdAt" < $2` : ''}
      ORDER BY post."createdAt" DESC
      limit $1
    `,
      replacements
    );

    return { posts: posts, hasMore: posts.length === realLimit + 1 };
  }

  @Query(() => Post, { nullable: true })
  post(@Arg('id') id: number) {
    const post = Post.findOne({ where: { id } });
    return post;
  }

  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  async createPost(@Arg('title') title: string, @Arg('text') text: string, @Ctx() { req }: MyContext) {
    const post = Post.create({ title, creatorID: req.session.userID, text }).save();
    return post;
  }

  @Mutation(() => Post, { nullable: true })
  async updatePost(@Arg('id') id: number, @Arg('title') title: string) {
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
  async deletePost(@Arg('id') id: number) {
    const post = await Post.delete(id);
    if (post.affected === 1) {
      return true;
    }
    return false;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async vote(
    @Arg('postID', () => Int) postID: number,
    @Arg('value', () => Int) value: number,
    @Ctx() { req }: MyContext
  ) {
    const isUpvote = value !== -1;
    const realValue = isUpvote ? 1 : -1;
    const { userID } = req.session;
    await getConnection().query(
      `
      START TRANSACTION;

      INSERT INTO upvote ("userId", "postId", value) values (${userID},${postID},${realValue});
      UPDATE post SET points = points + ${realValue} WHERE id = ${postID};

      COMMIT;
      `
    );
    return true;
  }
}
