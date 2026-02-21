import { Router } from "express";
import { getHives,deleteHive,createHive } from "../controllers/hives.controller";
import { authMiddleware } from "../middlewares/auth.middleware";


export const hiveRoutes = Router();
hiveRoutes.get("/hives",authMiddleware, getHives);
hiveRoutes.post("/hives", authMiddleware, createHive);
hiveRoutes.delete("/hives/:hiveName", authMiddleware,deleteHive);
