// import User from '../models/user';
import { Request, Response } from "express";
import { validatePassword } from "../services";
import { createSession } from "../services/sessions.service";

export const createUserSessionHandler = async (req: Request, res: Response) => {
  //validate email and password
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send("Wrong username or password");
  }
  //create session
  const session = await createSession(user._id, req.get("user-agent") || "");
  //create access token
  //create refresh token
  //send
};
