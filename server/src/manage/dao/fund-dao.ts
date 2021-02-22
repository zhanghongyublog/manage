import { ca_db, IDENTIFIER_FUND } from './ca-db';

async function ensure() {
  const _table = `${IDENTIFIER_FUND}`;
  if (!(await ca_db.schema.hasTable(_table))) {
    console.info(`create table '${_table}' now...`);
    await ca_db.schema
      .createTable(_table, t => {
        t.charset('utf8mb4');
        t.string('fundNo').primary().unique('FUND_NO_UNIQUE').notNullable().comment('基金编号');
        t.string('fundName', 100).defaultTo(null).comment('基金名称');
        t.string('fundType', 100).defaultTo(null).comment('基金类型');
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

export const fund_dao = {
  ensure,
  get
};
