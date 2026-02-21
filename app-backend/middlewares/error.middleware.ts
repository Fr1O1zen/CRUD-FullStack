import { Request, Response, NextFunction } from "express";

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);

  res.status(500).json({
    message: err.message || "Internal server error",
  });
}