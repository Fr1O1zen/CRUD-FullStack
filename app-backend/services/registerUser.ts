import bcrypt from "bcryptjs";
import { db } from "../db/knex";


export async function registerUser(
  email: string,
  password: string,
  nickname: string,
) {
  const existing = await db("users").where({ email }).orWhere({ username: nickname }).first();
  if (existing) return {isRegstered: false, message: "Email or username already in use" };

  const password_hash = await bcrypt.hash(password, 10);
  try {
    await db("users").insert({ id: crypto.randomUUID(), email: email, password_hash: password_hash, username: nickname });
  } catch (err) {
    console.error("Error inserting user into database:", err);
    return null;
  }
  return { isRegstered: true, message: "User registered successfully" };
}
