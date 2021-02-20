import compose from 'koa-compose';
import koaCors from '@koa/cors';
import KoaLogger from 'koa-logger';
import koaBody from 'koa-body';
import koaJson from 'koa-json';
import { ServiceParams } from './service-params';
import { Context } from 'koa';
import { ResponseUtils } from './utils';

export function middleware(conf: ServiceParams) {
  return compose([
    koaCors({
      allowHeaders: ['X-Requested-With', 'User-Agent', 'Referer', 'Content-Type', 'Cache-Control', 'Access-Token'],
      maxAge: 86400,
      credentials: true
    }), // 处理跨域
    KoaLogger(), // 打印每一次接口请求响应时间
    koaBody({
      multipart: true,
      formidable: {
        maxFileSize: 20000 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
      },
      formLimit: '20mb',
      jsonLimit: '20mb',
      textLimit: '20mb'
    }),
    koaJson(),
    async (ctx: Context, next) => {
      try {
        await next();
      } catch (_err) {
        const err = _err || new Error('Unknown Exception!');
        // 判断是否为通用 api error
        if (ResponseUtils.isError(err.message)) {
          ctx.body = JSON.parse(err.message);
          return;
        }
        throw err;
      }
    },
    conf.router.routes()
  ]);
}
