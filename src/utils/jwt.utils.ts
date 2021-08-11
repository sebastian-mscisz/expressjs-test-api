import jwt from "jsonwebtoken";
import config from "../../config/default";

const privateKey = config.privateKey;

export const sign = (object: Object, options?: jwt.SignOptions | undefined) => {
  return jwt.sign(object, privateKey, options);
};

export const decode = (token: string) => {
  try {
    const decoded = jwt.verify(token, privateKey);
    return { valid: true, expired: false, decoded };
  } catch (error) {
    return { valid: false, expired: (error.message = "jwt expired"), decoded: null };
  }
};
