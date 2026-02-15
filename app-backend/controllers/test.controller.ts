import { Request, Response } from "express";
import { TestDb } from "../services/testDb";

export async function test(req: Request, res: Response) {
    await res.send("hello from test endpoint -> "+"DB status:" + await TestDb());
}