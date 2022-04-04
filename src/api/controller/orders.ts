import { Request, Response, NextFunction } from 'express';
import logger from '../../utils/logger';

import config from '../../config';

import book from '../../store/book';
import {
  TPairBook,
  TBookItem,
} from '../../store/book.type';

import {
  getBestAsk,
  getBestBid,
} from '../service/bidAsk';

const {
  moneys,
} = config;

const getPrices = (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      pair,
    } = req.params;

    logger.info(`API: Request to get prices ${pair}...`);

    if (!moneys.includes(pair)) throw new Error('Pair name not valid');

    // Find the order items by pair-name.
    const pairBook:TPairBook = book.get(pair);

    // Get prices.
    const askPrice:TBookItem = getBestAsk(pairBook.asks);
    const bidPrice:TBookItem = getBestBid(pairBook.bids);

    // Prepare response.
    res.status(200).json({
      pair,
      bid: bidPrice,
      ask: askPrice,
    });
  } catch (err) {
    next(err);
  }
};

export default getPrices;
