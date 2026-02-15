import { Router } from "express";
import { test } from "../controllers/test.controller";

export const testRoutes = Router();

testRoutes.get("/test", test);