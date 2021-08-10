import express, { Response, Request } from "express";
import { createUserHandler } from "../controllers";
import { createUserSchema } from "../schemas/users.schema";
import { validate as validateRequest } from "../middleware/validateRequest";

export const usersRouter = express.Router();

usersRouter.get("/", (req: Request, res: Response) => res.sendStatus(200));
usersRouter.post("/", validateRequest(createUserSchema), createUserHandler);
