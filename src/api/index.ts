import http from 'http';
import 'dotenv/config';

import express, { Application } from 'express';
import config from '../config';

// Define routes and events
import routes from './routes';

const {
  server: { port },
} = config;

const createApi = () => {
  // Start Express-js.
  const app: Application = express();
  http.createServer(app);

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Include routes.
  app.use('/', routes);

  // Start listen mode.
  app.listen(port, () => console.log('Listening in port', port));

  return app;
};

export default createApi;
