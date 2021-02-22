import Router from 'koa-router';
import { stock_ctrl } from './stock-controller';

const router = new Router();
router.prefix('/');

/**
 * @api {GET} /stocks 获取评估维度列表
 * @apiDescription 获取评估维度列表
 * @apiVersion 1.0.0
 * @apiName stocks
 * @apiGroup stocks
 *
 * @apiHeader {String} Access-Token token 用户的登录凭证
 *
 * @apiParam (query) {string} [dimension_id]             维度ID
 * @apiParam (query) {string} [dimension_name]           维度名称
 * @apiParam (query) {string} [dimension_creator]        维度创建者,uid
 */
router.get('/stocks', stock_ctrl.getStocks);

export default router;
