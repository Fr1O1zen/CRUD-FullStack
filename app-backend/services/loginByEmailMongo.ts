import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config";
import {client, db} from "../db/mongo";
import { PublicUser } from "../DTO/public.user";
import { LoginResult } from "../DTO/login.result";
import { UserMongo } from "../DAO/userMongo";
import { UserSchemaMongo } from "../schemas/userMongo.schema";

export async function loginByEmailMongo(
  email: string,
  password: string,
): Promise<LoginResult | null> {
  const user = await db.collection<UserMongo>("users").findOne({ email });
  if (!user) return null;
  const parsed = UserSchemaMongo.safeParse(user);
  if (!parsed.success) {
    console.log("User record does not match expected shape:", parsed.error.format());
    return null;
  }
  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) return null;
  const token = jwt.sign({ sub: user._id}, config.jwt_secret, {
    expiresIn: "1h",
  });
  const publicUser: PublicUser = {
    nickname: parsed.data.username,
    email: parsed.data.email,
  };
  console.log("Login successful for user:", publicUser);
  return { user: publicUser, token };
}
