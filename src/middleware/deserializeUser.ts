import { Request, NextFunction, Response } from "express";
import { get } from "lodash";
import { decode } from "../utils/jwt.utils";
import { reIssueAccessToken } from "../services";

export const deserializeUser = async (req: Request, response: Response, next: NextFunction) => {
  const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "");

  const refreshToken = get(req, "headers.x-refresh");

  if (!accessToken) return next();

  const { decoded, expired } = decode(accessToken);

  if (decoded) {
    // @ts-ignore
    req.user = decoded;
    return next();
  }

  if (expired && refreshToken) {
    const newAccessToken = await reIssueAccessToken({ refreshToken });
    if (newAccessToken) {
      response.setHeader("x-access-token", newAccessToken);
      const { decoded } = decode(newAccessToken);
      // @ts-ignore
      req.user = decoded;
    }
    return next();
  }
  return next();
};
