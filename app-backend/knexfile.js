// Small JS wrapper so knex CLI can load TypeScript config via ts-node
require('ts-node').register({ transpileOnly: true });
module.exports = require('./db/knexfile.ts').default;
