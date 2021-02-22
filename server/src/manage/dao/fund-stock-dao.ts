import { ca_db, IDENTIFIER_FUND_STOCK, IDENTIFIER_FUND, IDENTIFIER_STOCK } from './ca-db';

async function ensure() {
  const _table = `${IDENTIFIER_FUND_STOCK}`;
  if (!(await ca_db.schema.hasTable(_table))) {
    console.info(`create table '${_table}' now...`);
    await ca_db.schema
      .createTable(_table, t => {
        t.charset('utf8mb4');
        t.string('fundNo').notNullable().comment('基金编号');
        t.foreign('fundNo').references('fundNo').inTable(IDENTIFIER_FUND);
        t.string('stockNo', 100).notNullable().comment('股票编号');
        t.foreign('stockNo').references('stockNo').inTable(IDENTIFIER_STOCK);
        t.decimal('percent', 6, 2).defaultTo(null).comment('比例');
        t.dateTime('createTime').defaultTo(ca_db.raw('current_timestamp')).comment('创建时间');
        t.dateTime('updateTime').defaultTo(ca_db.raw('current_timestamp on update current_timestamp')).comment('更新时间');
      })
      .catch(err => {
        console.error(err);
      });
  }
  return _table;
}

async function get() {
  const _table = await ensure();
  try {
    const _result = await ca_db.select().from(_table)
    return _result;
  } catch (error) {
    return [];
  }
}

export const fund_stock_dao = {
  ensure,
  get
};
