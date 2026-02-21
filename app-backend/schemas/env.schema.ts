import { z } from "zod";

export const envSchema = z.object({
  port: z.string().regex(/^\d+$/).transform(Number),
  db_user: z.string().min(1),
  db_password: z.string().min(1),
  db_host: z.string().min(1),
  db_port: z.string().regex(/^\d+$/).transform(Number),
  db_name: z.string().min(1),
  db_host_mongodb: z.string().min(1),
  db_port_mongodb: z.string().regex(/^\d+$/).transform(Number),
  db_user_mongodb: z.string().min(1),
  db_password_mongodb: z.string().min(1),
  db_name_mongodb: z.string().min(1),
  jwt_secret: z.string().min(32),
});