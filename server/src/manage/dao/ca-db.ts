import Knex from 'knex';
import config from 'config';

const prefix = config.get('db.prod') ? 'PROD_' : 'TEST_';

export const IDENTIFIER_STOCK = prefix + 'TB_STOCK';
export const IDENTIFIER_FUND = prefix + 'TB_FUND';
export const IDENTIFIER_FUND_STOCK = prefix + 'TB_FUND_STOCK';

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
