import logger from './utils/logger';

import {
  boostrap,
} from './consumer';

import createApi from './api';

logger.info('CONSUMER: starting...');
boostrap();

logger.info('API: starting');
createApi();
