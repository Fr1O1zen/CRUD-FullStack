import { Request } from "express";
import { UUID } from "node:crypto";
import jwt from "jsonwebtoken";
import config from "../config/config";
export default function getUserIdFromCookie(req: Request): UUID | null {
  const token = req.cookies["access_token"] as string;
  if (!token) {
    return null;
  }
  try {
    const decoded = jwt.verify(token, config.jwt_secret || "");
    return (decoded as any).sub as UUID;
  } catch (error) {
    return null;
  }
}
