"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const limit_1 = __importDefault(require("./limit"));
jest.mock('../../../config', () => ({
    store: {
        limit: 10,
    },
    moneys: [
        'tDAIUSD',
        'tETHUSD',
    ],
}));
jest.mock('../../service/market/limit', () => ({
    calcBuy: jest.fn().mockReturnValue(2000),
    calcSell: jest.fn().mockReturnValue(100),
}));
describe('Order controller', () => {
    const jsonMock = jest.fn();
    const statusMock = jest.fn();
    const nextMock = jest.fn();
    const resMock = {
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
        };
        (0, limit_1.default)(mockRequest, resMock, nextMock);
        expect(nextMock).toHaveBeenCalledWith(new Error('Pair name not valid'));
    });
    it('getPrices - bad operation', () => {
        const mockRequest = {
            params: {
                pair: 'tDAIUSD',
                operation: 'BUYY',
            },
        };
        (0, limit_1.default)(mockRequest, resMock, nextMock);
        expect(nextMock).toHaveBeenCalledWith(new Error('Operation not allowed'));
    });
    it('calcExecution buy success', () => {
        const mockRequest = {
            params: {
                pair: 'tDAIUSD',
                operation: 'BUY',
                ammount: 1000,
                limit: 10,
            },
        };
        (0, limit_1.default)(mockRequest, resMock, nextMock);
        // Assertions.
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith({
            pair: 'tDAIUSD',
            operation: 'BUY',
            limit: 10,
            count: 2000,
        });
    });
    it('calcExecution sell success', () => {
        const mockRequest = {
            params: {
                pair: 'tDAIUSD',
                operation: 'SELL',
                ammount: 1000,
                limit: 10,
            },
        };
        (0, limit_1.default)(mockRequest, resMock, nextMock);
        // Assertions.
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith({
            pair: 'tDAIUSD',
            operation: 'SELL',
            limit: 10,
            count: 100,
        });
    });
});
