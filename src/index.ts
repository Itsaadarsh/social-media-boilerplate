import { createConnection } from 'typeorm';
import { Post } from './entities/Post';

const main = async () => {
  await createConnection();
  const post = new Post();
  post.title = 'new post';
  await post.save();

  const posts = Post.find({});
  console.log(await posts);
};

main().catch(err => {
  console.error(err);
});
