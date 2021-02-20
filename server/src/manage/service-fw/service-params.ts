import Router = require('koa-router');

export interface ServiceParams {
  name: string;
  production?: boolean; // default TRUE when NODE_ENV = 'prod' / 'production'
  router: Router;
  hooks?: {
    init?: () => Promise<void>;
    ready?: () => Promise<void>;
    destroy?: () => Promise<void>;
  };
}
