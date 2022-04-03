import { Request, Response, NextFunction } from 'express';
import getPrices from './orders';

jest.mock('../../config', () => ({
  store: {
    limit: 10,
  },
  moneys: [
    'tDAIUSD',
    'tETHUSD',
  ],
}));

jest.mock('../../store/book', () => ({
  get: jest.fn().mockReturnValue({ asks: [], bids: [] }),
}));

jest.mock('../service/bidAsk', () => ({
  getBestAsk: jest.fn().mockReturnValue({ PRICE: 1, COUNT: 1, AMOUNT: 2 }),
  getBestBid: jest.fn().mockReturnValue({ PRICE: 10, COUNT: 1, AMOUNT: 2 }),
}));

describe('Order controller', () => {
  const jsonMock = jest.fn();
  const statusMock = jest.fn();
  const nextMock = jest.fn();
  const resMock: any = {
    status: statusMock.mockImplementation(() => ({
      json: jsonMock,
    })),
  };

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it('getPrices success', () => {
    const mockRequest = {
      params: {
        pair: 'tDAIUSD',
      },
    } as unknown;

    getPrices(mockRequest as Request, resMock as Response, nextMock as NextFunction);

    // Assertions.
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({
      pair: 'tDAIUSD',
      bid: { PRICE: 10, COUNT: 1, AMOUNT: 2 },
      ask: { PRICE: 1, COUNT: 1, AMOUNT: 2 },
    });
  });

  it('getPrices error', () => {
    const mockRequest = {
      params: {
        pair: 'LTCUSD',
      },
    } as unknown;

    getPrices(mockRequest as Request, resMock as Response, nextMock as NextFunction);
    expect(nextMock).toHaveBeenCalledWith(new Error('Pair name not valid'));
  });
});
