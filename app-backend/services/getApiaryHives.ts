import { UUID } from "node:crypto";
import { db } from "../db/knex";

interface Hive {
    id: number;
    apiary_id: number;
    name: string;
    is_deleted: boolean;
    created_at: Date;
}

type PublicHive = Omit<Hive, "is_deleted" | "created_at" | "apiary_id" | "id">;

interface Hives{
    hives: PublicHive[];
}

export default async function getApiaryHives(userId: UUID): Promise<Hives> {
    const hives = await db<Hive>("hives")
        .join("apiaries", "hives.apiary_id", "apiaries.id")
        .where("apiaries.owner_user_id", userId)
        .andWhere("hives.is_deleted", false)
        .select("hives.name");
    return { hives: hives.map(hive => ({ name: hive.name })) };
}