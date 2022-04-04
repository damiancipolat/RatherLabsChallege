"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bidasks_1 = require("./bidasks");
const book_1 = __importDefault(require("../../store/book"));
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
        book_1.default.clear();
        book_1.default.fill(['ARS_USD']);
        const bookItem = {
            PRICE: 2000,
            COUNT: 10,
            AMOUNT: 100,
        };
        (0, bidasks_1.bidAskIncrease)(bookItem, 'ARS_USD');
        const items = book_1.default.get('ARS_USD').bids;
        expect(items).toStrictEqual([bookItem]);
    });
    it('ask Increase', () => {
        book_1.default.clear();
        book_1.default.fill(['ARS_USD']);
        const bookItem = {
            PRICE: 2000,
            COUNT: 10,
            AMOUNT: -1,
        };
        (0, bidasks_1.bidAskIncrease)(bookItem, 'ARS_USD');
        const items = book_1.default.get('ARS_USD').asks;
        expect(items).toStrictEqual([bookItem]);
    });
    it('bid Decrease', () => {
        book_1.default.clear();
        book_1.default.fill(['ARS_USD']);
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
        (0, bidasks_1.bidAskIncrease)(bookItem1, 'ARS_USD');
        (0, bidasks_1.bidAskIncrease)(bookItem2, 'ARS_USD');
        // Decrease bid.
        (0, bidasks_1.bidAskDecrease)(bookItem2, 'ARS_USD');
        const items = book_1.default.get('ARS_USD').bids;
        expect(items).toStrictEqual([bookItem1]);
    });
    it('ask Decrease', () => {
        book_1.default.clear();
        book_1.default.fill(['ARS_USD']);
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
        (0, bidasks_1.bidAskIncrease)(bookItem1, 'ARS_USD');
        (0, bidasks_1.bidAskIncrease)(bookItem2, 'ARS_USD');
        // Decrease bid.
        (0, bidasks_1.bidAskDecrease)(bookItem2, 'ARS_USD');
        const items = book_1.default.get('ARS_USD').asks;
        expect(items).toStrictEqual([bookItem1]);
    });
    it('bidAskLogic Increase', () => {
        book_1.default.clear();
        book_1.default.fill(['ARS_USD']);
        const bookItem = {
            PRICE: 2000,
            COUNT: 1,
            AMOUNT: 100,
        };
        (0, bidasks_1.bidAskLogic)(bookItem, 'ARS_USD');
        const items = book_1.default.get('ARS_USD').bids;
        expect(items).toStrictEqual([bookItem]);
    });
    it('bidAskLogic Decrease', () => {
        book_1.default.clear();
        book_1.default.fill(['ARS_USD']);
        const bookItem = {
            PRICE: 2000,
            COUNT: 0,
            AMOUNT: 100,
        };
        (0, bidasks_1.bidAskLogic)(bookItem, 'ARS_USD');
        const items = book_1.default.get('ARS_USD').bids;
        expect(items).toStrictEqual([]);
    });
});
