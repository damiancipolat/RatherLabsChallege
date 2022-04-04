import logger from 'pino';

export default logger({
  name: 'challenge-rather',
  level: 'debug',
  transport: {
    target: 'pino-pretty',
  },
  options: {
    colorize: true,
  },
});
