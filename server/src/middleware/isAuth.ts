import { MyContext } from "src/utils/types";
import { MiddlewareFn } from "type-graphql";

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  if (!context.req.session.userID) {
    throw new Error("User not authenticated / Logged In");
  }
  return next();
};
