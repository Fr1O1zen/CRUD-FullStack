import {Request, Response} from "express";
import { registerUserMongo } from "../services/registerUserMongo";


export async function registerMongo(req: Request, res: Response){
    try {
        const { email, password, nickname } = req.body;
        if (!email || !password || !nickname) {
            return res.status(400).json({ message: "Email, password and nickname are required" });
        }
        const result = await registerUserMongo(email, password, nickname);
        if (!result || !result.isRegstered) {
            return res.status(409).json({ message: result?.message || "Email or username already in use" });
        }
        return res.status(201).json(result);
    }catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
}
