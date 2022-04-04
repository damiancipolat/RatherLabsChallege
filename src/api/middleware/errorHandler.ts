import { Request, Response } from 'express';
import logger from '../../utils/logger';

// Get the env.
const env = process.env.NODE_ENV;

//Error handler middleware.
const errorHandler = (err:any, req:Request, res:Response) => {
  const staticError = 'Internal error';

  // Extract info from error object.
  const {
    statusCode, status, statusText, message,
  } = err;

  // Get the status code.
  const statusHTTP = statusCode || status || 500;

  // Get the error detail.
  const detail = (message || statusText) || staticError;

  // Log in stderr and launch the exception to sentry.
  logger.error(`API: Error handler - message:${detail}`);

  // Return error response, only to production env use the same message
  res.status(statusHTTP).json({
    status: statusHTTP,
    message: (env === 'production') ? staticError : detail,
  });
};

export default errorHandler;
