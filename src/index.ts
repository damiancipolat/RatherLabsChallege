import {
  boostrap,
} from './consumer';

import createApi from './api';

console.log('Starting consumer...');
boostrap();

console.log('Starting Api...');
createApi();
