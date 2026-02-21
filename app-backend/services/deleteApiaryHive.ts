import db from "../db/knex";
import { UUID } from "node:crypto";

export default async function deleteApiaryHive(userId: UUID, hiveName: string): Promise<void> {
    try{
        await db("hives")
        .update({ is_deleted: true })
        .whereIn("apiary_id", function() {
            this.select("id")
                .from("apiaries")
                .where("owner_user_id", userId);
        })
        .andWhere("name", hiveName);
    }
    catch (error) {
        console.log("Error deleting hive:", error);
        throw error;
    }
}