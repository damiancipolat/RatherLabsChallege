import { Request, Response, NextFunction } from 'express';
import config from '../../../config';

import book from '../../../store/book';
import {
  TPairBook,
} from '../../../store/book.type';

const {
  moneys,
} = config;

const calcLimit = (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      pair,
      operation,
      limit,
    } = req.params;

    if (!moneys.includes(pair)) throw new Error('Pair name not valid');

    // Find the order items by pair-name.
    const pairBook:TPairBook = book.get(pair);

    res.status(200).json({
      pair,
      operation,
      limit,
      pairBook,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export default calcLimit;
