import { Router } from "express";
import { login } from "../controllers/login.controller";
import { validateRequest } from "../middlewares/validateRequest.middleware";
import { loginSchema } from "../schemas/login.schema";
import { loginRequestLimiter } from "../middlewares/loginRequestLimiter.middleware";
export const loginRoutes = Router();
loginRoutes.post("/login", validateRequest(loginSchema,"body"), loginRequestLimiter, login);