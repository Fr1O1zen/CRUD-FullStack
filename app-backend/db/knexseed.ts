import { db } from './knex';
import bcrypt from "bcryptjs";

export async function seedDatabase() {
  try {
    const existingUsers = await db("users").count("* as count");
    const rawCount = existingUsers?.[0]?.count ?? 0;
    const count = typeof rawCount === "string" ? parseInt(rawCount, 10) : Number(rawCount);
    console.log("Existing users count:", count);
    if (count === 0) {
      await db("users").insert([
        {
          id: "123e4567-e89b-12d3-a456-426614174000",
          username: "admin",
          email: "admin@example.com",
          password_hash: await bcrypt.hash("123456", 10), 
          is_deleted: false,
          created_at: new Date(),
        },
        {
          id: "123e4567-e89b-12d3-a456-426614174001",
          username: "user1",
          email: "user1@example.com",
          password_hash: await bcrypt.hash("123456", 10), 
          is_deleted: false,
          created_at: new Date(),
        },
        {
          id: "123e4567-e89b-12d3-a456-426614174002",
          username: "marcin",
          email: "marcin@test.com",
          password_hash: await bcrypt.hash("123456", 10), 
          is_deleted: false,
          created_at: new Date(),
        },
    ]);
  }
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}