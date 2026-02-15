import { Request, Response } from "express";
import { loginByEmail } from "../services/loginByEmail";

export async function login(req: Request, res: Response) {
  const result = await loginByEmail(req.body.email, req.body.password);
  if (!result) return res.status(401).json({ message: "Invalid credentials" });
  const { user, token } = result;
  res.cookie("access_token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    maxAge: 60 * 60 * 1000
  });
  console.log(token);
  return res.status(200).json({ user });
}