import User, { UserDocument } from "../models/users.model";
import { DocumentDefinition, FilterQuery } from "mongoose";
import { omit } from "lodash";

export const createUser = async (user: DocumentDefinition<UserDocument>) => {
  try {
    return await User.create(user);
  } catch (error) {
    throw new Error(error);
  }
};

export const findUser = async (query: FilterQuery<UserDocument>) => {
  return await User.findOne(query);
};

export const validatePassword = async ({ email, password }: { email: UserDocument["email"]; password: string }) => {
  const user = await findUser({ email });

  if (!user) {
    return false;
  }

  const isValid = await user.comparePassword(password);

  if (!isValid) {
    return false;
  }

  return omit(user.toJSON(), "password");
};
