import { Request, Response, NextFunction } from 'express';
import logger from '../../../utils/logger';

import config from '../../../config';

import book from '../../../store/book';
import {
  TPairBook,
} from '../../../store/book.type';

import ICalculate from '../../service/market/calculations.type';

import {
  calcBuy,
  calcSell,
} from '../../service/market/calculations';

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

const calcExecution = (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      pair,
      operation,
      ammount,
    } = req.params;

    logger.info(`API: Request to simulate execution - market prices pair:${pair} operation:${operation}...`);

    if (!moneys.includes(pair)) throw new Error('Pair name not valid');

    // Find the order items by pair-name.
    const pairBook:TPairBook = book.get(pair);

    // Operation.
    const calculator:ICalculate|null = getOperator(operation.toUpperCase());

    if (!calculator) throw new Error('Operation not allowed');

    // Simulate by operation.
    const price = calculator(pairBook, parseFloat(ammount));

    res.status(200).json({
      pair,
      operation,
      price,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export default calcExecution;
