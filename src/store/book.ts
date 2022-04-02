import {
  TBook,
  TPairBook,
  TBookItem,
} from './book.type';

import config from '../config';

let BOOK:TBook = {};
const PAIR_MAX:any = config.store.limit;

// CLear the store.
const clear = () => {
  BOOK = {};
};

// Initializae memory in book with pair-name money from list.
const fill = (pairList:string[]) => {
  pairList.forEach((pair:string) => {
    BOOK[pair] = {
      asks: [],
      bids: [],
    };
  });
};

// Get Pair book from name.
const get = (pairName:string):TPairBook => BOOK[pairName];

// Return the private book to public.
const all = ():TBook => BOOK;

// Remove a item from an array.
const removeFromArray = (arr:any, obj:any) => arr.filter((v:any) => v !== obj);

// Slice and array and keep the last values set by the max from config.
const purgeLimit = (list:TBookItem[]) => list.slice(list.length - PAIR_MAX, list.length);

// Record a new bid into the dictionary.
const increaseBids = (pair:string, item:TBookItem) => {
  const pairStore:TPairBook = get(pair);

  // Add new value.
  pairStore.bids.push(item);

  // Keep registers into the limit.
  if (pairStore.bids.length > PAIR_MAX) pairStore.bids = purgeLimit(pairStore.bids);
};

// Record a new ask into the dictionary.
const increaseAsks = (pair:string, item:TBookItem) => {
  const pairStore:TPairBook = get(pair);

  // Add new value.
  pairStore.asks.push(item);

  // Keep registers into the limit.
  if (pairStore.asks.length > PAIR_MAX) pairStore.asks = purgeLimit(pairStore.asks);
};

// Remove a bid object from the array.
const decreaseBids = (pair:string, item:TBookItem) => {
  const pairStore:TPairBook = get(pair);
  pairStore.bids = removeFromArray(pairStore.bids, item);
};

// Remove a ask object from the array.
const decreaseAsks = (pair:string, item:TBookItem) => {
  const pairStore:TPairBook = get(pair);
  pairStore.asks = removeFromArray(pairStore.asks, item);
};

export default {
  fill,
  get,
  clear,
  all,
  increaseAsks,
  increaseBids,
  decreaseAsks,
  decreaseBids,
  removeFromArray,
  purgeLimit,
};
