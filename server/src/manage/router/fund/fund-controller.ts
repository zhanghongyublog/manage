import { RouterContext } from 'koa-router';
import { paramUtils, caUtils } from '../utils';
import { DimensionGetParam, fund_dao } from '../../dao';
import { ResponseUtils } from 'src/manage/service-fw/utils';
import { fund_stock_dao } from 'src/manage/dao/fund-stock-dao';
var http = require('http');

// async function getFunds(ctx: RouterContext) {
//   const _query = ctx.request.query;
//   // const url = 'http://fund.eastmoney.com/js/fundcode_search.js';
//   const data = await http.get(url)
//   ctx.body = ResponseUtils.normal<any>({
//     data: data
//   });
//   return;
// }
async function getFunds(ctx: RouterContext) {
  const _query = ctx.request.query;
  ctx.body = ResponseUtils.normal<any>({
    data: await fund_dao.get()
  });
  return;
}



// async function getDimensions(ctx: RouterContext) {
//   const _query = ctx.request.query;
//   const _param: DimensionGetParam = {
//     dimensionId: _query.dimension_id,
//     dimensionName: _query.dimension_name,
//     dimensionCreator: _query.dimension_creator
//   };
//   ctx.body = ResponseUtils.normal<any>({
//     data: '132132'
//   });
//   return;
//   // ctx.body = ResponseUtils.error<any>({
//   //   error_no: 100150
//   // });
//   // return;
// }

export const fund_ctrl = {
  getFunds,
};
