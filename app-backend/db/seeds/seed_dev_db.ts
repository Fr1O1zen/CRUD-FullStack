import { Knex } from "knex";
import bcrypt from "bcryptjs";


export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
  await knex("apiaries").del();
  await knex("hives").del();
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

    await knex("apiaries").insert([
        {
            id: "123e4567-e89b-12d3-a456-426614174aaa",
            owner_user_id: "123e4567-e89b-12d3-a456-426614174001",
            name: "User Apiary",
            is_deleted: false,
            created_at: new Date(),
        },
        {
            id: "123e4567-e89b-12d3-a456-426614174bbb",
            owner_user_id: "123e4567-e89b-12d3-a456-426614174002",
            name: "Marcin Apiary",
            is_deleted: false,
            created_at: new Date(),
        },
        {
            id: "123e4567-e89b-12d3-a456-426614174ccc",
            owner_user_id: "123e4567-e89b-12d3-a456-426614174000",
            name: "Admin Apiary",
            is_deleted: false,
            created_at: new Date(),
        }
    ]);

    await knex("hives").insert([
        {
            id: "123e4567-e89b-12d3-a456-a26614174aaa",
            apiary_id: "123e4567-e89b-12d3-a456-426614174aaa",
            name: "User Hive 1",
            is_deleted: false,
            created_at: new Date(),
        },
        {
            id: "123e4567-e89b-12d3-a456-b26614174bbb",
            apiary_id: "123e4567-e89b-12d3-a456-426614174bbb",
            name: "Marcin Hive 1",
            is_deleted: false,
            created_at: new Date(),
        },
        {
            id: "123e4567-e89b-12d3-a456-c26614174ccc",
            apiary_id: "123e4567-e89b-12d3-a456-426614174ccc",
            name: "Admin Hive 1",
            is_deleted: false,
            created_at: new Date(),
        }
    ]);
};
