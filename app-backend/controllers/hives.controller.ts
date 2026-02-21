import { Request, Response } from "express";
import getApiaryHives from "../services/getApiaryHives";
import getUserIdFromCookie from "../services/getUserIdFromCookie";
import createApiaryHive from "../services/createApiaryHive";
import deleteApiaryHive from "../services/deleteApiaryHive";

export async function getHives(req: Request, res: Response) {
  try {
    const userId = getUserIdFromCookie(req);
    if (!userId) {
      return res.status(400).json({ error: "User ID missing" });
    }
    const hives = await getApiaryHives(userId);
    return res.status(200).json({ hives });
  } catch (error) {
    console.log("Error fetching hives:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function deleteHive(req: Request, res: Response) {
  try {
    const userId = getUserIdFromCookie(req);
    if(!userId) {
      return res.status(400).json({ error: "User ID missing" });
    }
    const hiveName = req.params.hiveName; 
    await deleteApiaryHive(userId, hiveName as string);
    return res.status(200).json({ message: "Hive deleted successfully" });
  } catch (error) {
    console.log("Error deleting hive:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function createHive(req: Request, res: Response) {
  try {
    const userId = getUserIdFromCookie(req);
    if(!userId) {
      return res.status(400).json({ error: "User ID missing" });
    }
    const hiveName = req.body.name;
    await createApiaryHive(userId, hiveName);
    return res.status(201).json({ message: "Hive created successfully" });
  } catch (error) {
    console.log("Error creating hive:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}