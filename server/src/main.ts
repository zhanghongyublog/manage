import config from 'config';
import { CronJob } from 'cron';
import { Service } from './manage/service-fw';
import { router } from './manage/router';

const _svc_conf = config.get<{ name: string; port: number }>('service');

Service(
  {
    name: _svc_conf.name,
    router: router,
    hooks: {
      init: async () => {
        console.info('hooks init ...');
      },
      ready: async () => {
        console.info('hooks ready ...');
        //cronTime: '秒 分钟 小时 天  月份  星期'
        // new CronJob('0 0 7 * * *', ca_sync, null, true);
      },
      destroy: async () => {
        console.info('hooks destroy ...');
      }
    }
  },
  _svc_conf.port
);
