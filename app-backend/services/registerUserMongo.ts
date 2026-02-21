import bcrypt from "bcryptjs";
import { client,db } from "../db/mongo";
import { ObjectId } from "mongodb";


export async function registerUserMongo(
  email: string,
  password: string,
  nickname: string,
) {
  const existing = await db.collection("users").findOne({ $or: [{ email }, { username: nickname }] });
  if (existing) return {isRegstered: false, message: "Email or username already in use" };

  const password_hash = await bcrypt.hash(password, 10);
  try {
    await db.collection("users").insertOne({ id: new ObjectId(), email: email, password_hash: password_hash, username: nickname });
  } catch (err) {
    console.log("Error inserting user into database:", err);
    return null;
  }
  return { isRegstered: true, message: "User registered successfully" };
}
