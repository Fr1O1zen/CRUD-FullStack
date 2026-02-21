import { Router } from "express";
import { register } from "../controllers/register.controller";
import { registerMongo } from "../controllers/register_mongo.controller";
import { validateRequest } from "../middlewares/validateRequest.middleware";
import { registerSchema } from "../schemas/register.schema";
export const registerRoutes = Router();
registerRoutes.post("/register", validateRequest(registerSchema, "body"), register);
registerRoutes.post("/register-mongo", validateRequest(registerSchema, "body"), registerMongo);
