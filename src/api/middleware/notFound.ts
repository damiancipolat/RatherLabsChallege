import { Request, Response } from 'express';
import logger from '../../utils/logger';

// Not found controller.
const notFound = (req: Request, res: Response) => {
  logger.info(`API: url:${req.url} method:${req.method} Not found`);
  res.status(404).json({ error: 'Route not found.' });
};

export default notFound;
