import express from "express";
import { createUserHandler, getAllUsersHandler } from "../controllers";
import { createUserSchema } from "../schemas";
import { validate as validateRequest } from "../middleware";

export const usersRouter = express.Router();

usersRouter.get("/", getAllUsersHandler);
usersRouter.post("/", validateRequest(createUserSchema), createUserHandler);
