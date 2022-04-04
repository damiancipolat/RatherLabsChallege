"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("./book"));
describe('Store test', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });
    afterEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });
    it('clear store', () => {
        book_1.default.fill(['ARS_USD', 'BTC_ARS']);
        book_1.default.clear();
        const bookTmp = book_1.default.all();
        expect(bookTmp).toStrictEqual({});
    });
    it('fill store with money list', () => {
        book_1.default.clear();
        book_1.default.fill(['ARS_USD', 'BTC_ARS']);
        const bookTmp = book_1.default.all();
        const compare = {
            ARS_USD: {
                bids: [],
                asks: [],
            },
            BTC_ARS: {
                bids: [],
                asks: [],
            },
        };
        expect(bookTmp).toStrictEqual(compare);
    });
    it('get all the store data', () => {
        book_1.default.clear();
        book_1.default.fill(['BTCUSD']);
        const bookTmp = book_1.default.all();
        const compare = {
            BTCUSD: {
                bids: [],
                asks: [],
            },
        };
        expect(bookTmp).toStrictEqual(compare);
    });
    it('get pair from name', () => {
        book_1.default.clear();
        book_1.default.fill(['BTCUSD']);
        const btcusd = book_1.default.get('BTCUSD');
        const compare = {
            bids: [],
            asks: [],
        };
        expect(btcusd).toStrictEqual(compare);
    });
    it('remove from array', () => {
        const mock = ['a', 'b', 'c', 'd', 'e'];
        const result = book_1.default.removeFromArray(mock, 'c');
        const compare = ['a', 'b', 'd', 'e'];
        expect(result).toStrictEqual(compare);
    });
    it('purgeLimit', () => {
        const mock = ['a', 'b', 'c', 'd', 'e'];
        const result = book_1.default.removeFromArray(mock, 'c');
        const compare = ['a', 'b', 'd', 'e'];
        expect(result).toStrictEqual(compare);
    });
    it('include new bid in the store', () => {
        const item = {
            PRICE: 20000,
            COUNT: 10,
            AMOUNT: 1000,
        };
        // Clear, fill the store.
        book_1.default.clear();
        book_1.default.fill(['btcusd']);
        // Include new item.
        book_1.default.increaseBids('btcusd', item);
        const bookTmp = book_1.default.get('btcusd');
        expect(bookTmp.bids).toStrictEqual([item]);
    });
    it('include new ask in the store', () => {
        const item = {
            PRICE: 20000,
            COUNT: 10,
            AMOUNT: 1000,
        };
        // Clear, fill the store.
        book_1.default.clear();
        book_1.default.fill(['btcusd']);
        // Include new item.
        book_1.default.increaseAsks('btcusd', item);
        const bookTmp = book_1.default.get('btcusd');
        expect(bookTmp.asks).toStrictEqual([item]);
    });
    it('decrease bid in the store', () => {
        const item1 = {
            PRICE: 20000,
            COUNT: 10,
            AMOUNT: 1000,
        };
        const item2 = {
            PRICE: 30000,
            COUNT: 100,
            AMOUNT: 100,
        };
        const item3 = {
            PRICE: 30,
            COUNT: 10,
            AMOUNT: 4400,
        };
        // Clear, fill the store.
        book_1.default.clear();
        book_1.default.fill(['btcusd']);
        // Include new item.
        book_1.default.increaseBids('btcusd', item1);
        book_1.default.increaseBids('btcusd', item2);
        book_1.default.increaseBids('btcusd', item3);
        // Remove bid.
        const bookTmp = book_1.default.get('btcusd');
        book_1.default.decreaseBids('btcusd', item2);
        expect(bookTmp.bids).toStrictEqual([item1, item3]);
    });
    it('decrease asks in the store', () => {
        const item1 = {
            PRICE: 20000,
            COUNT: 10,
            AMOUNT: 1000,
        };
        const item2 = {
            PRICE: 30000,
            COUNT: 100,
            AMOUNT: 100,
        };
        const item3 = {
            PRICE: 30,
            COUNT: 10,
            AMOUNT: 4400,
        };
        // Clear, fill the store.
        book_1.default.clear();
        book_1.default.fill(['btcusd']);
        // Include new item.
        book_1.default.increaseAsks('btcusd', item1);
        book_1.default.increaseAsks('btcusd', item2);
        book_1.default.increaseAsks('btcusd', item3);
        // Remove bid.
        const bookTmp = book_1.default.get('btcusd');
        book_1.default.decreaseAsks('btcusd', item2);
        expect(bookTmp.asks).toStrictEqual([item1, item3]);
    });
});
