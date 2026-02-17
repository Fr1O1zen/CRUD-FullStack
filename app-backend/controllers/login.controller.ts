import { Request, Response } from "express";
import { loginByEmail } from "../services/loginByEmail";
import createAccessTokenCookie from "../services/createAccessTokenCookie";

export async function login(req: Request, res: Response) {
  const result = await loginByEmail(req.body.email, req.body.password);
  if (!result) return res.status(401).json({ message: "Invalid credentials" });
  const { user, token } = result;
  createAccessTokenCookie(res, token);
  return res.status(200).json({ user });
}