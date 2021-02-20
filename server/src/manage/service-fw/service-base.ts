import Koa from 'koa';
import onerror from 'koa-onerror';

import { middleware } from './middleware';
import { ServiceParams } from './service-params';

export class ServiceBase extends Koa {
  constructor(private conf: ServiceParams, private port: number) {
    super();
    this._exec();
  }

  private async _exec() {
    await this.conf.hooks.init();
    this._enableErrorHandling(); // 补充onerror函数
    this.use(middleware(this.conf));

    const server = super.listen(this.port);

    server.on('listening', () => {
      const addr = server.address();
      const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
      console.info(`Listening on ${bind}`);
      this.conf.hooks.ready();
    });

    server.once('close', () => {
      this.conf.hooks.destroy();
    });
  }

  private _enableErrorHandling() {
    /**
     * 由于 Koa extends EventEmitter,因此这里监听全局EventEmitter的error事件,
     * 可以通过ctx.app.emit('error', err)触发事件
     */
    this.on('error', err => {
      if (!err.expose) {
        console.info(`error: ${err.message} \n stack: ${err.stack} \n`);
      }
    });

    // 捕获未被处理的promise rejection
    process.on('unhandledRejection', err => {
      console.info(`unhandledRejection: ${err['message']}, stack: ${err['stack']}`);
    });

    // 捕获未被处理的异常
    process.on('uncaughtException', err => {
      console.info(`uncaughtException: ${err.message}, stack: ${err.stack}`);
    });

    onerror(this);
  }
}
