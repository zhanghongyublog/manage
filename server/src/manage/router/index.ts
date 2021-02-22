import Router from 'koa-router';

import fund from './fund/fund-router';
import stock from './stock/stock-router';

const router = new Router();

router.use(fund.routes(), fund.allowedMethods());
router.use(stock.routes(), stock.allowedMethods());

router.get('/', async ctx => {
  ctx.body = 'Welcome to fund!';
});

export { router };
