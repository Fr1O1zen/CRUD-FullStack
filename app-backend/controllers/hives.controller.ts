import { Request, Response } from "express";
import getApiaryHives from "../services/getApiaryHives";
import { UUID } from "node:crypto";

export async function getHives(req: Request, res: Response) {
  try {
    const userId = req.query["userid"] as UUID;
    if (!userId) {
      return res.status(400).json({ error: "User ID header is missing" });
    }
    const hives = await getApiaryHives(userId);
    return res.status(200).json({ hives });
  } catch (error) {
    console.error("Error fetching hives:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
