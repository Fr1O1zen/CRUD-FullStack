import db from "../db/knex";
import  UUID  from "node:crypto";
export default async function createApiaryHive(userId: string, hiveName: string): Promise<void> {
    try {
        const existingHive = await db("hives")
            .join("apiaries", "hives.apiary_id", "apiaries.id")
            .where("apiaries.owner_user_id", userId)
            .andWhere("hives.name", hiveName)
            .andWhere("hives.is_deleted", false)
            .first();
            if (existingHive) {
                throw new Error("Hive with this name already exists");
            }
            const apiary = await db("apiaries")
                .where("owner_user_id", userId)
                .first();
            if (!apiary) {
                throw new Error("User has no apiary");
            }
            await db("hives").insert({
                id: UUID.randomUUID(),
                name: hiveName,
                apiary_id: apiary.id,
                is_deleted: false,
                created_at: new Date(),
            });
    } catch (error) {
        throw error;
    }
}