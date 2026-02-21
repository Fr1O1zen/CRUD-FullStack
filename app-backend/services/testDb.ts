import { db } from "../db/knex";

export async function TestDb() {
    try {
        const result = await db.raw('SELECT 1+1 AS result');
        console.log('Database connection test successful:', result.rows[0]);
        return true;
    } catch (error) {
        console.log('Database connection test failed:', error);
        return false;
    }
}