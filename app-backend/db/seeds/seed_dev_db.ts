import { Knex } from "knex";
import bcrypt from "bcryptjs";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
  await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
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
};
