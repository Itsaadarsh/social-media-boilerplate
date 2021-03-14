import 'reflect-metadata';
import connectRedis from 'connect-redis';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { PostResolver } from './resolvers/post';
import { UserResolver } from './resolvers/user';
import { COOKIE_NAME } from './utils/constants';
import { MyContext } from './utils/types';
import Redis from 'ioredis';

const main = async () => {
  try {
    await createConnection();
    console.log('Database successfully connected');
    const app = express();

    const RedisStore = connectRedis(session);
    const redis = new Redis();

    redis.get;
    app.use(
      cors({
        origin: 'http://localhost:3000',
        credentials: true,
      })
    );

    app.use(
      session({
        name: COOKIE_NAME,
        store: new RedisStore({ client: redis, disableTouch: true }),
        cookie: {
          maxAge: 1000 * 60 * 60 * 24 * 365 * 20, // 2 Years
          httpOnly: true,
          sameSite: 'lax',
          secure: process.env.NODE_ENV === 'production',
        },
        saveUninitialized: false,
        secret: 'v45879v7985bakl33',
        resave: false,
      })
    );

    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [PostResolver, UserResolver],
        validate: false,
      }),
      context: ({ req, res }): MyContext => ({ req, res, redis }),
    });

    apolloServer.applyMiddleware({ app, cors: false });

    app.listen(4000, () => {
      console.log('Server Started at http://localhost:4000/graphql');
    });
  } catch (err) {
    console.error(err);
  }
};

main().catch(err => {
  console.error(err);
});
