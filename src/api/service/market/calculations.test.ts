import {
  calcBuy,
  calcSell,
} from './calculations';

jest.mock('../bidAsk', () => ({
  getBestBid: jest.fn().mockReturnValue({
    PRICE: 100,
    COUNT: 10,
    AMOUNT: 5,
  }),
  getBestAsk: jest.fn().mockReturnValue({
    PRICE: 10000,
    COUNT: 1,
    AMOUNT: 100,
  }),
}));

describe('Calculation test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it('calcBuy test', () => {
    const pair = {
      bids: [],
      asks: [],
    };

    const result = calcBuy(pair, 50);
    expect(result).toBe(5000);
  });

  it('calcSell test', () => {
    const pair = {
      bids: [],
      asks: [],
    };

    const result = calcSell(pair, 10);
    expect(result).toBe(100000);
  });
});
