import User, { UserDocument } from "../models/users.model";
import { DocumentDefinition } from "mongoose";

export const createUser = async (user: DocumentDefinition<UserDocument>) => {
  try {
    return await User.create(user);
  } catch (error) {
    throw new Error(error);
  }
};

// export const findUser = async () => {};
