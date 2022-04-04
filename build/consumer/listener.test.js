"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("../store/book"));
const listener_1 = require("./listener");
describe('Listener tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });
    afterEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });
    it('updateBook - bad pair name', () => {
        book_1.default.clear();
        book_1.default.fill(['BTCUSD']);
        const mock = {
            pair: 'BTCUSD',
            chanelId: 111,
            tips: [],
        };
        const result = (0, listener_1.updateBook)(mock);
        expect(result).toBeNull;
    });
    it('updateBook - process array', () => {
        // Prepare the book.
        book_1.default.clear();
        book_1.default.fill(['BTCUSD']);
        const item = {
            PRICE: 20000,
            COUNT: 10,
            AMOUNT: 1000,
        };
        book_1.default.increaseAsks('BTCUSD', item);
        // Process.
        const mock = {
            pair: 'BTCUSD',
            chanelId: 111,
            tips: [
                {
                    PRICE: 1,
                    COUNT: 1,
                    AMOUNT: 1,
                },
            ],
        };
        const result = (0, listener_1.updateBook)(mock);
        expect(result).toStrictEqual([
            {
                PRICE: 1,
                COUNT: 1,
                AMOUNT: 1,
            },
        ]);
    });
});
