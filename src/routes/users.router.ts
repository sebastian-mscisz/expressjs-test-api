import express from "express";
import { createUserHandler, getUserHandler } from "../controllers";
import { createUserSchema } from "../schemas/users.schema";
import { validate as validateRequest } from "../middleware/validateRequest";

export const usersRouter = express.Router();

usersRouter.get("/", getUserHandler);
usersRouter.post("/", validateRequest(createUserSchema), createUserHandler);
