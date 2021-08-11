import config from "../../config/default";
import { get } from "lodash";
import { LeanDocument, FilterQuery, UpdateQuery } from "mongoose";
import { UserDocument, SessionDocument, Session } from "../models";
import { sign, decode } from "../utils/jwt.utils";
import { findUser } from "./users.service";

export const createSession = async (userId: string, userAgent: string) => {
  const session = await Session.create({ user: userId, userAgent });

  return session.toJSON();
};

export const createAccessToken = ({
  user,
  session,
}: {
  user: Omit<UserDocument, "password"> | LeanDocument<Omit<UserDocument, "password">>;
  session: Omit<SessionDocument, "password"> | LeanDocument<Omit<SessionDocument, "password">>;
}) => {
  const accessToken = sign({ ...user, session: session._id }, { expiresIn: config.accessTokenTTL });

  return accessToken;
};

export const reIssueAccessToken = async ({ refreshToken }: { refreshToken: string }) => {
  const { decoded } = decode(refreshToken);

  if (!decoded || !get(decoded, "_id")) return false;

  const session = await Session.findById(get(decoded, "_id"));

  if (!session || !session?.valid) return false;

  const user = await findUser({ _id: session.user });

  if (!user) return false;

  const accessToken = createAccessToken({ user, session });
};

export const updateSession = async (query: FilterQuery<SessionDocument>, update: UpdateQuery<SessionDocument>) => {
  return Session.updateOne(query, update);
};

export const findSessions = async (query: FilterQuery<SessionDocument>) => {
  return Session.find(query).lean();
};
