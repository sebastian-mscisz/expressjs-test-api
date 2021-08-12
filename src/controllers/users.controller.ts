// import User from '../models/user';
import { Request, Response } from "express";
import { omit } from "lodash";
import log from "../logger";
import { createUser, findUser, findAllUsers } from "../services";

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

export const getAllUsersHandler = async (req: Request, res: Response) => {
  try {
    log.info(req.body);
    const user = await findAllUsers(req.body);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    return res.send(user);
  } catch (error) {
    log.error(error);
    return res.status(409).send(error.message);
  }
};

export const getUserHandler = async (req: Request, res: Response) => {
  try {
    log.info(req.body);
    const user = await findUser(req.body);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    return res.send(user);
  } catch (error) {
    log.error(error);
    return res.status(409).send(error.message);
  }
};
