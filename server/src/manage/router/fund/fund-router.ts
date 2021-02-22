import Router from 'koa-router';
import { fund_ctrl } from './fund-controller';

const router = new Router();
router.prefix('/');

/**
 * @api {GET} /funds  获取基金列表
 * @apiDescription 获取基金列表
 * @apiVersion 1.0.0
 * @apiName getFunds
 * @apiGroup fund
 *
 * @apiHeader {String} Access-Token token 用户的登录凭证
 *
 * @apiParam (query) {number} [page_no]             pageNo
 * @apiParam (query) {string} [page_size]           pageSize
 */
router.get('/funds', fund_ctrl.getFunds);

/**
 * @api {GET} /fund 获取单个基金的信息
 * @apiDescription 获取单个基金的信息
 * @apiVersion 1.0.0
 * @apiName getFund
 * @apiGroup fund
 *
 * @apiHeader {String} Access-Token token 用户的登录凭证
 *
 * @apiParam (query) {string} [fund_id]             基金编号
 * @apiParam (query) {string} [fund_name]           基金名称
 */
router.get('/fund', fund_ctrl.getFunds);

// /**
//  * @api {POST} /fund/:fund_id 添加到基金列表
//  * @apiDescription 添加到基金列表
//  * @apiVersion 1.0.0
//  * @apiName postFund
//  * @apiGroup fund
//  *
//  * @apiHeader {String} Access-Token token 用户的登录凭证
//  *
//  * @apiParam (query) {string} [fund_id]             基金编号
//  * @apiParam (query) {string} [fund_name]           基金名称
//  */
// router.post('/fund/:fund_id', fund_ctrl.getDimensions);

// /**
//  * @api {POST} /fund/:fund_id 添加到持有基金列表
//  * @apiDescription 添加到持有基金列表
//  * @apiVersion 1.0.0
//  * @apiName postFund
//  * @apiGroup fund
//  *
//  * @apiHeader {String} Access-Token token 用户的登录凭证
//  *
//  * @apiParam (query) {string} [fund_id]             基金编号
//  * @apiParam (query) {string} [fund_name]           基金名称
//  */
// router.post('/fund/:fund_id', fund_ctrl.getDimensions);

export default router;
