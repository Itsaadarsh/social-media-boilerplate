import argon2 from 'argon2';
import { User } from '../entities/User';
import { Arg, Ctx, Field, Mutation, ObjectType, Query, Resolver } from 'type-graphql';
import { MyContext } from 'src/utils/types';

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: Array<FieldError>;

  @Field(() => User, { nullable: true })
  user?: User;
}

@ObjectType()
class FieldError {
  @Field()
  field?: string;

  @Field()
  message?: string;
}

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext) {
    if (!req.session.userID) {
      return null;
    }
    const user = await User.findOne(req.session.userID);
    return user;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    if (username.length <= 2) {
      return {
        errors: [
          {
            field: 'username',
            message: 'username should be greater than 2 characters',
          },
        ],
      };
    }

    if (password.length <= 5) {
      return {
        errors: [
          {
            field: 'password',
            message: 'password should be greater than 5 characters',
          },
        ],
      };
    }

    try {
      const hashedPassword = await argon2.hash(password);

      const user = await User.create({
        username,
        password: hashedPassword,
      }).save();

      req.session.userID = user.id;

      return { user };
    } catch (err) {
      if (err.code === '23505') {
        return {
          errors: [
            {
              field: 'username',
              message: 'username already exists, try again!',
            },
          ],
        };
      }
      return {};
    }
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const isUser = await User.findOne({ where: { username } });
    if (!isUser) {
      return {
        errors: [
          {
            field: 'username',
            message: 'User not found',
          },
        ],
      };
    }
    const isvVerifyPassword = await argon2.verify(isUser.password, password);

    if (!isvVerifyPassword) {
      return {
        errors: [
          {
            field: 'password',
            message: 'Incorrect Password',
          },
        ],
      };
    }

    req.session.userID = isUser.id;

    return {
      user: isUser,
    };
  }
}
