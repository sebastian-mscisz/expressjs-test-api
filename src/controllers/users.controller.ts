// import User from '../models/user';
import { Request, Response } from "express";
import { omit } from "lodash";
import log from "../logger";
import { createUser } from "../services";

// Display list of all user.

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), "password"));
  } catch (error) {
    log.error(error);
    return res.status(409).send(error.message);
  }
};
