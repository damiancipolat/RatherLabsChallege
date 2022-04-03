import {
  getBestAsk,
  getBestBid,
} from './bidAsk';

describe('bidAsk prices algorithm test', () => {
  it('getBestBid empty', () => {
    expect(() => getBestBid([])).toThrow(new Error('Empty array not allowed'));
  });

  it('getBestBid test', () => {
    const mock = [
      {
        PRICE: 10,
        COUNT: 100,
        AMOUNT: 100,
      },
      {
        PRICE: 1000,
        COUNT: 10,
        AMOUNT: 10,
      },
      {
        PRICE: 200,
        COUNT: 100,
        AMOUNT: 100,
      },
      {
        PRICE: 50,
        COUNT: 100,
        AMOUNT: 100,
      },
    ];

    const compare = {
      PRICE: 1000,
      COUNT: 10,
      AMOUNT: 10,
    };

    const result = getBestBid(mock);
    expect(result).toStrictEqual(compare);
  });

  it('getBestAsk empty', () => {
    expect(() => getBestAsk([])).toThrow(new Error('Empty array not allowed'));
  });

  it('getBestAsk test', () => {
    const mock = [
      {
        PRICE: 10,
        COUNT: 100,
        AMOUNT: 100,
      },
      {
        PRICE: 1000,
        COUNT: 10,
        AMOUNT: 10,
      },
      {
        PRICE: 200,
        COUNT: 100,
        AMOUNT: 100,
      },
      {
        PRICE: 50,
        COUNT: 100,
        AMOUNT: 100,
      },
    ];

    const compare = {
      PRICE: 10,
      COUNT: 100,
      AMOUNT: 100,
    };

    const result = getBestAsk(mock);
    expect(result).toStrictEqual(compare);
  });
});
