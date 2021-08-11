import { object, string } from "yup";

export const createUserSessionSchema = object({
  body: object({
    password: string().required("Password is required").min(6, "Password must be minimum 6 characters long"),
    email: string().email("Must be a valid email").required("Email is required"),
  }),
});
