import { ca_db, IDENTIFIER_FUND } from './ca-db';

async function ensure() {
  const _table = `${IDENTIFIER_FUND}`;
  if (!(await ca_db.schema.hasTable(_table))) {
    console.info(`create table '${_table}' now...`);
    await ca_db.schema
      .createTable(_table, t => {
        t.charset('utf8mb4');
        t.integer('dimensionId', 50).unsigned().comment('评估维度id');
        // t.foreign('dimensionId').references('dimensionId').inTable(IDENTIFIER_DIMENSION);

        t.integer('grade', 10).defaultTo(null).comment('等级');
        t.string('gradeDesc', 255).defaultTo(null).comment('等级描述');
        t.integer('score', 10).defaultTo(null).comment('分数');
        t.unique(['dimensionId', 'grade'], 'DIMENSION_GRADE_UNIQUE');
      })
      .catch(err => {
        console.error(err);
      });
  }
  return _table;
}

export const fund_dao = {
  ensure
};
