import { Request, Response, NextFunction } from 'express';
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
    console.log(err);
    next(err);
  }
};

export default getPrices;

/*
import {
  getBestAsk,
  getBestBid
} from './api/service/bidAsk';

const tmp = [
  { PRICE: 100, COUNT: 2, AMOUNT: -0.346219 },
  { PRICE: 2, COUNT: 1, AMOUNT: -0.26480692 },
  { PRICE: 5, COUNT: 1, AMOUNT: -0.00203984 },
  { PRICE: 1000, COUNT: 3, AMOUNT: -1.44216749 }];

const result = getBestAsk(tmp);
console.log('xxx',result);

*/
