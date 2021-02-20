import Knex from 'knex';
import config from 'config';

const prefix = config.get('db.prod') ? 'PROD_ASSESS_' : 'TEST_ASSESS_';

export const IDENTIFIER_STOCK = prefix + 'TB_STOCK';
export const IDENTIFIER_FUND = prefix + 'TB_FUND';

export const ca_db = Knex({
  debug: true,
  client: 'mysql',
  connection: config.get('db'),
  pool: { min: 0, max: 10 },
  acquireConnectionTimeout: 10000,

  log: {
    debug: (msg: any) => console.debug(msg),
    warn: (msg: any) => console.warn(msg),
    error: (msg: any) => console.error(msg)
  }
});
