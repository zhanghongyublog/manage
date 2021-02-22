import { RouterContext } from 'koa-router';
import { paramUtils, caUtils } from '../utils';
import { DimensionGetParam, stock_dao } from '../../dao';
import { ResponseUtils } from 'src/manage/service-fw/utils';



async function getStocks(ctx: RouterContext) {
  const _query = ctx.request.query;
  const _param: DimensionGetParam = {
    dimensionId: _query.dimension_id,
    dimensionName: _query.dimension_name,
    dimensionCreator: _query.dimension_creator
  };
  ctx.body = ResponseUtils.normal<any>({
    data: await stock_dao.get()
  });
  return;
  // ctx.body = ResponseUtils.error<any>({
  //   error_no: 100150
  // });
  // return;
}

export const stock_ctrl = {
  getStocks
};
