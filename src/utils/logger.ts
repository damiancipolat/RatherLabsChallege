import logger from 'pino';
import pckg from '../../package.json';

export default logger({
  name: pckg.name,
  level: 'debug',
  transport: {
    target: 'pino-pretty',
  },
  options: {
    colorize: true,
  },
});
