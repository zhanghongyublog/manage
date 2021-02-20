import { ServiceParams } from './service-params';
import { ServiceBase } from './service-base';

function _fillServiceParams(params: ServiceParams): ServiceParams {
  if (params.production === undefined) {
    params.production = process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production' ? true : false;
  }

  if (!params.hooks) {
    params.hooks = {
      init: async () => {
        console.info('init ...');
      },
      ready: async () => {
        console.info('ready ...');
      },
      destroy: async () => {
        console.info('destroy ...');
      }
    };
  } else {
    if (!params.hooks.init) {
      params.hooks.init = async () => {
        console.info('init ...');
      };
    }

    if (!params.hooks.ready) {
      params.hooks.ready = async () => {
        console.info('ready ...');
      };
    }

    if (!params.hooks.destroy) {
      params.hooks.destroy = async () => {
        console.info('destroy ...');
      };
    }
  }
  return params;
}

export function Service(params: ServiceParams, port = 8080): void {
  const _params = _fillServiceParams(params);

  new ServiceBase(_params, port);

  process.on('SIGINT', async sig => {
    if (params.hooks.destroy) {
      await params.hooks.destroy();
    }
    process.exit(0);
  });
}
