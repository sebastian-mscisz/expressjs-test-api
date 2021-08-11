import express from "express";
import { createUserSessionHandler, invalidateUserSessionHandler, getUserSessionsHandler } from "../controllers";
import { createUserSessionSchema } from "../schemas";
import { validate as validateRequest, requiresUser } from "../middleware";

export const sessionsRouter = express.Router();

sessionsRouter.get("/", requiresUser, getUserSessionsHandler);
sessionsRouter.post("/", validateRequest(createUserSessionSchema), createUserSessionHandler);
sessionsRouter.delete("/", requiresUser, invalidateUserSessionHandler);
