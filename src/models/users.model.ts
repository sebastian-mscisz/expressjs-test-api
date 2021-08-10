import { Schema, model, Document, HookNextFunction } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../config/default";

export interface UserDocument extends Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(canditatePassword: string): Promise<boolean>;
}

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next: HookNextFunction) {
  let user = this as UserDocument;

  if (!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(config.saltWorkFactor);
  const hash = await bcrypt.hashSync(user.password, salt);

  user.password = hash;

  return next();
});

UserSchema.methods.comparePassword = async function (candidatePassword: string) {
  const user = this as UserDocument;
  return bcrypt.compare(candidatePassword, user.password).catch((err) => false);
};

const User = model<UserDocument>("User", UserSchema);

export default User;
