import { ca_db, IDENTIFIER_STOCK } from './ca-db';
import { DataOptions } from './data-options';

async function ensure() {
  const _table = `${IDENTIFIER_STOCK}`;
  if (!(await ca_db.schema.hasTable(_table))) {
    console.info(`create table '${_table}' now...`);
    await ca_db.schema.createTable(_table, t => {
      t.charset('utf8mb4');
      t.string('stockId').primary().unsigned().notNullable().comment('ID(自增)');
      t.string('stockName', 50).unique('stock_NAME_UNIQUE').defaultTo(null).comment('评估维度名称');
      t.dateTime('createTime').defaultTo(ca_db.raw('current_timestamp')).comment('创建时间');
    });
  }
  return _table;
}

async function add(options) {
  // const _table = await ensure();
  // const _contentTable = await dimensionContent_dao.ensure();
  // const _options = DataOptions(options);
  // const _dimensionContent = _options.dimensionContent;
  // delete _options['dimensionContent'];
  // const _trans = await ca_db.transaction();
  // try {
  //   const _insertRes = await _trans(_table).insert(_options);
  //   const _param: Array<DimensionContentPostParam> = _dimensionContent
  //     .filter(dc => dc.grade && dc.gradeDesc && dc.score)
  //     .map(d => {
  //       return {
  //         dimensionId: _insertRes[0],
  //         grade: d.grade,
  //         gradeDesc: d.gradeDesc,
  //         score: d.score
  //       };
  //     });
  //   await ca_db.batchInsert(_contentTable, _param).transacting(_trans);
  //   _trans.commit();
  //   return _insertRes;
  // } catch (error) {
  //   console.error(error);
  //   _trans.rollback();
  //   if (error.sqlMessage.includes('DIMENSION_GRADE_UNIQUE')) {
  //     return { error_no: 100254 };
  //   }
  //   if (error.sqlMessage.includes('DIMENSION_NAME_UNIQUE')) {
  //     return { error_no: 100252 };
  //   }
  //   return { error_no: 100201, error_msg: error.sqlMessage };
  // }
}

async function update(dimensionId: number, options) {
  // const _table = await ensure();
  // const _contentTable = await dimensionContent_dao.ensure();
  // const _options = DataOptions(options);
  // const _trans = await ca_db.transaction();
  // try {
  //   let _updateRes;
  //   if (_options.dimensionName) {
  //     _updateRes = await _trans(_table).where({ dimensionId }).update({ dimensionName: _options.dimensionName });
  //   }
  //   if (_options.dimensionContent) {
  //     await _trans(_contentTable).where({ dimensionId }).del();
  //     const _param: Array<DimensionContentPostParam> = _options.dimensionContent
  //       .filter(dc => dc.grade && dc.gradeDesc && dc.score)
  //       .map(d => {
  //         return {
  //           dimensionId: dimensionId,
  //           grade: d.grade,
  //           gradeDesc: d.gradeDesc,
  //           score: d.score
  //         };
  //       });
  //     _updateRes = await ca_db.batchInsert(_contentTable, _param).transacting(_trans);
  //   }
  //   _trans.commit();
  //   return _updateRes;
  // } catch (error) {
  //   console.error(error);
  //   _trans.rollback();
  //   if (error.sqlMessage.includes('DIMENSION_GRADE_UNIQUE')) {
  //     return { error_no: 100254 };
  //   }
  //   if (error.sqlMessage.includes('DIMENSION_NAME_UNIQUE')) {
  //     return { error_no: 100252 };
  //   }
  //   return { error_no: 100201, error_msg: error.sqlMessage };
  // }
}

async function del(dimensionId: number) {
  // const _table = await ensure();
  // const _contentTable = await dimensionContent_dao.ensure();
  // const _trans = await ca_db.transaction();
  // try {
  //   await _trans(_contentTable).where({ dimensionId }).del();
  //   const result = await _trans(_table).where({ dimensionId }).del();
  //   _trans.commit();
  //   return result;
  // } catch (error) {
  //   console.error(error);
  //   _trans.rollback();
  //   if (error.code === 'ER_ROW_IS_REFERENCED_2') {
  //     return { error_no: 100204 };
  //   }
  //   return { error_no: 100201, error_msg: error.sqlMessage };
  // }
}

async function get(options?) {
  // const _table = await ensure();
  // const _contentTable = await dimensionContent_dao.ensure();
  // const _options = DataOptions(options, _table);
  // try {
  //   const _result = await ca_db
  //     .select()
  //     .from(_contentTable)
  //     .rightJoin(_table, `${_table}.dimensionId`, `${_contentTable}.dimensionId`)
  //     .where(_options);
  //   return _result as Array<AssessmentDimensionDB>;
  // } catch (error) {
  //   return [];
  // }
}

async function getByIds(dimensionIds: Array<number>) {
  // const _table = await ensure();
  // const _contentTable = await dimensionContent_dao.ensure();
  // const _result = await ca_db
  //   .select()
  //   .from(_contentTable)
  //   .rightJoin(_table, `${_table}.dimensionId`, `${_contentTable}.dimensionId`)
  //   .whereIn(`${_table}.dimensionId`, dimensionIds);
  // return _result as Array<AssessmentDimensionDB>;
}

export const stock_dao = {
  ensure,
  add,
  update,
  get,
  getByIds,
  del
};
