"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = __importDefault(require("./orders"));
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
    const resMock = {
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
        };
        (0, orders_1.default)(mockRequest, resMock, nextMock);
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
        };
        (0, orders_1.default)(mockRequest, resMock, nextMock);
        expect(nextMock).toHaveBeenCalledWith(new Error('Pair name not valid'));
    });
});
