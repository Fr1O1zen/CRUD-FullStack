import dotenv from 'dotenv';
import path from 'path';
import { envSchema } from '../schemas/env.schema';

dotenv.config({ path: path.resolve(__dirname, ".env") });

interface Config {
  port: number;
  db_user: string;
  db_password: string;
  db_host: string;
  db_port: number;
  db_name: string;
  db_host_mongodb: string;
  db_port_mongodb: number;
  db_user_mongodb: string;
  db_password_mongodb: string;
  db_name_mongodb: string;
  jwt_secret: string;
}

// validate raw env and transform types (ports -> number)
const parsed = envSchema.safeParse(process.env as Record<string, unknown>);
if (!parsed.success) {
  console.log('Invalid environment variables:', parsed.error.issues.map(issue => `${issue.message}`));
  throw new Error('Invalid environment variables');
}

const config: Config = {
  port: parsed.data.port,
  db_user: parsed.data.db_user,
  db_password: parsed.data.db_password,
  db_host: parsed.data.db_host,
  db_port: parsed.data.db_port,
  db_name: parsed.data.db_name,
  db_host_mongodb: parsed.data.db_host_mongodb,
  db_port_mongodb: parsed.data.db_port_mongodb,
  db_user_mongodb: parsed.data.db_user_mongodb,
  db_password_mongodb: parsed.data.db_password_mongodb,
  db_name_mongodb: parsed.data.db_name_mongodb,
  jwt_secret: parsed.data.jwt_secret,
};

export default config;