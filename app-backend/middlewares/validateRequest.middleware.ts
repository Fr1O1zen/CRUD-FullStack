import e, { Request, Response, NextFunction } from "express";
import { ZodType, ZodError } from "zod";

export const validateRequest = (schema: ZodType, property: "body" | "query" | "params") => 
    (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req[property]);
        if (!result.success) {
            return res.status(400).json({ message: "Validation error", errors: result.error.issues.map(issue => ({message: issue.message })) });
        }
        next();
    }