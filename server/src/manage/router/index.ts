import Router from 'koa-router';

import assessmentDimension from './stock/stock-router';

const router = new Router();

router.use(assessmentDimension.routes(), assessmentDimension.allowedMethods());

router.get('/', async ctx => {
  ctx.body = 'Welcome to ms-ind-skills!';
});

export { router };
