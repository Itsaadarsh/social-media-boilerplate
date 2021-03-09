import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { PostResolver } from './resolvers/post';
import { HelloResolver } from './resolvers/hello';
import { UserResolver } from './resolvers/user';

const main = async () => {
  try {
    await createConnection();
    console.log('Database successfully connected');
    const app = express();

    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [HelloResolver, PostResolver, UserResolver],
        validate: false,
      }),
    });

    apolloServer.applyMiddleware({ app });

    app.listen(4001, () => {
      console.log('Server Started at http://localhost:4001/graphql');
    });
  } catch (err) {
    console.error(err);
  }
};

main().catch(err => {
  console.error(err);
});
