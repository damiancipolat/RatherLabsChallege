import { Request, Response, NextFunction } from 'express';
import calcExecution from './market';

jest.mock('../../../config', () => ({
  store: {
    limit: 10,
  },
  moneys: [
    'tDAIUSD',
    'tETHUSD',
  ],
}));

jest.mock('../../service/market/calculations', () => ({
  calcBuy: jest.fn().mockReturnValue(2000),
  calcSell: jest.fn().mockReturnValue(100),
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

  it('getPrices - bad pair name', () => {
    const mockRequest = {
      params: {
        pair: 'LTCUSD',
      },
    } as unknown;

    calcExecution(mockRequest as Request, resMock as Response, nextMock as NextFunction);
    expect(nextMock).toHaveBeenCalledWith(new Error('Pair name not valid'));
  });

  it('getPrices - bad operation', () => {
    const mockRequest = {
      params: {
        pair: 'tDAIUSD',
        operation: 'BUYY',
      },
    } as unknown;

    calcExecution(mockRequest as Request, resMock as Response, nextMock as NextFunction);
    expect(nextMock).toHaveBeenCalledWith(new Error('Operation not allowed'));
  });

  it('getPrices buy success', () => {
    const mockRequest = {
      params: {
        pair: 'tDAIUSD',
        operation: 'BUY',
        ammount: 1000,
      },
    } as unknown;

    calcExecution(mockRequest as Request, resMock as Response, nextMock as NextFunction);

    // Assertions.
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({
      pair: 'tDAIUSD',
      operation: 'BUY',
      price: 2000,
    });
  });

  it('getPrices sell success', () => {
    const mockRequest = {
      params: {
        pair: 'tDAIUSD',
        operation: 'SELL',
        ammount: 100,
      },
    } as unknown;

    calcExecution(mockRequest as Request, resMock as Response, nextMock as NextFunction);

    // Assertions.
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith({
      pair: 'tDAIUSD',
      operation: 'SELL',
      price: 100,
    });
  });
});
