import {
  TBookItem,
} from '../../store/book.type';

import book from '../../store/book';
import logger from '../../utils/logger';

// Handle the process to decrease the bids.
const bidAskIncrease = (bookItem:TBookItem, pair:string) => {
  if (bookItem.AMOUNT > 0) {
    book.increaseBids(pair, bookItem);
  } else {
    book.increaseAsks(pair, bookItem);
  }
};

// Handle the process to decrease the asks.
const bidAskDecrease = (bookItem:TBookItem, pair:string) => {
  if (bookItem.AMOUNT === 1) {
    book.decreaseBids(pair, bookItem);
  }

  if (bookItem.AMOUNT === -1) {
    book.decreaseAsks(pair, bookItem);
  }
};

// Handle the main logic for process the book orders.
const bidAskLogic = (bookItem:TBookItem, pair:string) => {
  const {
    COUNT,
    PRICE,
    AMOUNT,
  } = bookItem;

  logger.debug(`CONSUMER: ${pair}} Received value ${PRICE}:${COUNT}:${AMOUNT}`);

  if (COUNT > 0) bidAskIncrease({ PRICE, COUNT, AMOUNT }, pair);

  if (COUNT === 0) bidAskDecrease({ PRICE, COUNT, AMOUNT }, pair);
};

export {
  bidAskLogic,
  bidAskIncrease,
  bidAskDecrease,
};
