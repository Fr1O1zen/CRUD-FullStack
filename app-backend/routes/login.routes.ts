import { Router } from "express";
import { login } from "../controllers/login.controller";
import { validateRequest } from "../middlewares/validateRequest.middleware";
import { loginSchema } from "../schemas/login.schema";
export const loginRoutes = Router();
loginRoutes.post("/login", validateRequest(loginSchema,"body"), login);