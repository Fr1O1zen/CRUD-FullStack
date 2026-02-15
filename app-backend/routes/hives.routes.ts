import { Router } from "express";
import { getHives } from "../controllers/hives.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const hiveRoutes = Router();
hiveRoutes.get("/hives",authMiddleware, getHives);
