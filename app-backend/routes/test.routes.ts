import { Router } from "express";
import { test } from "../controllers/test.controller";
import { loginRequestLimiter } from "../middlewares/loginRequestLimiter.middleware";
const testLimiter = loginRequestLimiter;
export const testRoutes = Router();
testRoutes.get("/test", testLimiter,test);