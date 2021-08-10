import express from "express";
import { createUserSessionHandler } from "../controllers";

export const sessionsRouter = express.Router();

sessionsRouter.get("/", createUserSessionHandler);
