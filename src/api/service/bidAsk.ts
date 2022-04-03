import { TBookItem } from '../../store/book.type';

const getBestBid = (bids:TBookItem[]):TBookItem => {
  if (bids.length === 0) throw new Error('Empty array not allowed');

  bids.sort((a:TBookItem, b:TBookItem) => ((a.PRICE > b.PRICE) ? -1 : 1));
  return bids[0];
};

const getBestAsk = (asks:TBookItem[]):TBookItem => {
  if (asks.length === 0) throw new Error('Empty array not allowed');

  asks.sort((a:TBookItem, b:TBookItem) => ((a.PRICE < b.PRICE) ? -1 : 1));
  return asks[0];
};

export {
  getBestAsk,
  getBestBid,
};
