import knex from 'knex';
import config from '../config/config';

export const db = knex({
  client: 'pg',
  connection: {
    host: config.db_host,
    port: config.db_port,
    user: config.db_user,
    password: config.db_password,
    database: config.db_name
  }
});

