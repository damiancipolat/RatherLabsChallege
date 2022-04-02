import {
  bidAskIncrease,
  bidAskDecrease,
  bidAskLogic,
} from './bidasks';

import book from '../../store/book';

describe('Biz bidask test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it('bid Increase', () => {
    book.clear();
    book.fill(['ARS_USD']);

    const bookItem = {
      PRICE: 2000,
      COUNT: 10,
      AMOUNT: 100,
    };

    bidAskIncrease(bookItem, 'ARS_USD');
    const items = book.get('ARS_USD').bids;

    expect(items).toStrictEqual([bookItem]);
  });

  it('ask Increase', () => {
    book.clear();
    book.fill(['ARS_USD']);

    const bookItem = {
      PRICE: 2000,
      COUNT: 10,
      AMOUNT: -1,
    };

    bidAskIncrease(bookItem, 'ARS_USD');
    const items = book.get('ARS_USD').asks;

    expect(items).toStrictEqual([bookItem]);
  });

  it('bid Decrease', () => {
    book.clear();
    book.fill(['ARS_USD']);

    const bookItem1 = {
      PRICE: 3000,
      COUNT: 10,
      AMOUNT: 1,
    };

    const bookItem2 = {
      PRICE: 3000,
      COUNT: 10,
      AMOUNT: 1,
    };

    // Record new bid/ask.
    bidAskIncrease(bookItem1, 'ARS_USD');
    bidAskIncrease(bookItem2, 'ARS_USD');

    // Decrease bid.
    bidAskDecrease(bookItem2, 'ARS_USD');
    const items = book.get('ARS_USD').bids;

    expect(items).toStrictEqual([bookItem1]);
  });

  it('ask Decrease', () => {
    book.clear();
    book.fill(['ARS_USD']);

    const bookItem1 = {
      PRICE: 3000,
      COUNT: 10,
      AMOUNT: -1,
    };

    const bookItem2 = {
      PRICE: 3000,
      COUNT: 10,
      AMOUNT: -1,
    };

    // Record new bid/ask.
    bidAskIncrease(bookItem1, 'ARS_USD');
    bidAskIncrease(bookItem2, 'ARS_USD');

    // Decrease bid.
    bidAskDecrease(bookItem2, 'ARS_USD');
    const items = book.get('ARS_USD').asks;

    expect(items).toStrictEqual([bookItem1]);
  });

  it('bidAskLogic Increase', () => {
    book.clear();
    book.fill(['ARS_USD']);

    const bookItem = {
      PRICE: 2000,
      COUNT: 1,
      AMOUNT: 100,
    };

    bidAskLogic(bookItem, 'ARS_USD');
    const items = book.get('ARS_USD').bids;

    expect(items).toStrictEqual([bookItem]);
  });

  it('bidAskLogic Decrease', () => {
    book.clear();
    book.fill(['ARS_USD']);

    const bookItem = {
      PRICE: 2000,
      COUNT: 0,
      AMOUNT: 100,
    };

    bidAskLogic(bookItem, 'ARS_USD');
    const items = book.get('ARS_USD').bids;

    expect(items).toStrictEqual([]);
  });
});
