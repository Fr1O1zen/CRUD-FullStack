import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config";

interface AuthenticatedRequest extends Request {
  user?: { id: number };
}

export const authMiddleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1] || req.cookies.access_token; 
  console.log("Received token:", token);
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
  console.log("Verifying token:", token);
  const payload = jwt.verify(token, config.jwt_secret) as any;
    req.user = { id: payload.sub };
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Invalid token" });
  }
};
