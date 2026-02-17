import { Knex } from 'knex';
import config from '../config/config';
import path from 'path';

const knexConfig: Record<string, Knex.Config> = {
  development: {
    client: 'pg',
    connection: {
      host: config.db_host,
      port: config.db_port,
      user: config.db_user,
      password: config.db_password,
      database: config.db_name,
    },
    migrations: {
      directory: path.resolve(__dirname, 'migrations'),
      extension: 'ts',
    },
    seeds: {
      directory: path.resolve(__dirname, 'seeds'),
      extension: 'ts',
    },
  },
};

export default knexConfig;

