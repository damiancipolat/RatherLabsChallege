import {
  TPairBook,
  TBookItem,
} from '../../../store/book.type';

import {
  getBestBid,
  getBestAsk,
} from '../bidAsk';

import ICalculate from './calculations.type';

// Calculate the price for a buy operation.
const calcBuy:ICalculate = (pair:TPairBook, amount:number):number => {
  // Get bids.
  const bidItem:TBookItem = getBestBid(pair.bids);
  return bidItem.PRICE * amount;
};

const calcSell:ICalculate = (pair:TPairBook, amount:number):number => {
  // Get bids.
  const askItem:TBookItem = getBestAsk(pair.asks);
  return askItem.PRICE * amount;
};

export {
  calcBuy,
  calcSell,
};
