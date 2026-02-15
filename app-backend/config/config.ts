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
  jwt_secret: string;
}

// validate raw env and transform types (ports -> number)
const parsed = envSchema.safeParse(process.env as Record<string, unknown>);
if (!parsed.success) {
  console.error('Invalid environment variables:', parsed.error.issues.map(issue => `${issue.message}`));
  throw new Error('Invalid environment variables');
}

const config: Config = {
  port: parsed.data.port,
  db_user: parsed.data.db_user,
  db_password: parsed.data.db_password,
  db_host: parsed.data.db_host,
  db_port: parsed.data.db_port,
  db_name: parsed.data.db_name,
  jwt_secret: parsed.data.jwt_secret,
};

export default config;