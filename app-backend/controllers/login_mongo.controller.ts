import { Request, Response } from "express";
import createAccessTokenCookie from "../services/createAccessTokenCookie";
import { loginByEmailMongo } from "../services/loginByEmailMongo";

export async function login_mongo(req: Request, res: Response) {
  const result = await loginByEmailMongo(req.body.email, req.body.password);
  if (!result) return res.status(401).json({ message: "Invalid credentials" });
  const { user, token } = result;
  createAccessTokenCookie(res, token);
  return res.status(200).json({ user });
}