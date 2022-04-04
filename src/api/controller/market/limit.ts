import { Request, Response, NextFunction } from 'express';
import logger from '../../../utils/logger';

import config from '../../../config';

import ICalculate from '../../service/market/calculations.type';

import book from '../../../store/book';

import {
  TPairBook,
} from '../../../store/book.type';

import {
  calcBuy,
  calcSell,
} from '../../service/market/limit';

const {
  moneys,
} = config;

// Get a calculation function by name.
const getOperator = (type:string):ICalculate|null => {
  switch (type) {
    case 'BUY':
      return calcBuy;
    case 'SELL':
      return calcSell;
    default:
      return null;
  }
};

const calcLimit = (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      pair,
      operation,
      ammount,
      limit,
    } = req.params;

    logger.info(`API: Request to calculate limit prices pair:${pair} operation:${operation}...`);

    if (!moneys.includes(pair)) throw new Error('Pair name not valid');

    // Find the order items by pair-name.
    const pairBook:TPairBook = book.get(pair);

    // Operation.
    const calculator:ICalculate|null = getOperator(operation.toUpperCase());

    if (!calculator) throw new Error('Operation not allowed');

    // Calc values.
    const count = calculator(pairBook, parseFloat(ammount), parseFloat(limit));

    res.status(200).json({
      pair,
      operation,
      limit,
      count,
    });
  } catch (err) {
    next(err);
  }
};

export default calcLimit;
