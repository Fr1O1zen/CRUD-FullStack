import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config";
import { db } from "../db/knex";
import { User } from "../DAO/user";
import { PublicUser } from "../DTO/public.user";
import { LoginResult } from "../DTO/login.result";
import {UserSchema} from "../schemas/user.schema";

export async function loginByEmail(
  email: string,
  password: string,
): Promise<LoginResult | null> {
  const user = await db<User>("users").where({ email }).first();
  if (!user) return null;
  const parsed = UserSchema.safeParse(user);
  if (!parsed.success) {
    console.error("User record does not match expected shape:", parsed.error.format());
    return null;
  }
  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) return null;
  const token = jwt.sign({ sub: user.id }, config.jwt_secret, {
    expiresIn: "1h",
  });
  const publicUser: PublicUser = {
    nickname: parsed.data.username,
    email: parsed.data.email,
  };
  console.log("Login successful for user:", publicUser);
  return { user: publicUser, token };
}
