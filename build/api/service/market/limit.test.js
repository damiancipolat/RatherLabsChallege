"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const limit_1 = require("./limit");
describe('Limit calculation - test', () => {
    it('calcBuy - limit invalid', () => {
        const book = {
            asks: [],
            bids: [
                { PRICE: 1000, COUNT: 1, AMOUNT: 10 },
                { PRICE: 200, COUNT: 1, AMOUNT: 10 },
                { PRICE: 300, COUNT: 1, AMOUNT: 10 },
            ],
        };
        expect(() => (0, limit_1.calcBuy)(book, 0.3)).toThrow(new Error('Limit value is required'));
    });
    it('calcBuy test', () => {
        const book = {
            asks: [],
            bids: [
                { PRICE: 1000, COUNT: 1, AMOUNT: 10 },
                { PRICE: 200, COUNT: 1, AMOUNT: 10 },
                { PRICE: 300, COUNT: 1, AMOUNT: 10 },
                { PRICE: 40, COUNT: 1, AMOUNT: 10 },
                { PRICE: 30, COUNT: 1, AMOUNT: 10 },
                { PRICE: 20, COUNT: 1, AMOUNT: 10 },
                { PRICE: 50, COUNT: 10, AMOUNT: 10 },
                { PRICE: 10, COUNT: 1, AMOUNT: 10 },
            ],
        };
        const result = (0, limit_1.calcBuy)(book, 0.3, 200);
        expect(result).toBe(10);
    });
    it('calcBuy empty', () => {
        const book = {
            asks: [],
            bids: [],
        };
        const result = (0, limit_1.calcBuy)(book, 0.3, 200);
        expect(result).toBe(0);
    });
    it('calcSell - limit invalid', () => {
        const book = {
            asks: [],
            bids: [
                { PRICE: 1000, COUNT: 1, AMOUNT: 10 },
                { PRICE: 200, COUNT: 1, AMOUNT: 10 },
                { PRICE: 300, COUNT: 1, AMOUNT: 10 },
            ],
        };
        expect(() => (0, limit_1.calcSell)(book, 0.3)).toThrow(new Error('Limit value is required'));
    });
    it('calcSell test', () => {
        const book = {
            bids: [],
            asks: [
                { PRICE: 1000, COUNT: 1, AMOUNT: 10 },
                { PRICE: 800, COUNT: 2, AMOUNT: 10 },
                { PRICE: 900, COUNT: 1, AMOUNT: 10 },
                { PRICE: 300, COUNT: 1, AMOUNT: 10 },
                { PRICE: 500, COUNT: 1, AMOUNT: 10 },
                { PRICE: 600, COUNT: 1, AMOUNT: 10 },
                { PRICE: 700, COUNT: 3, AMOUNT: 10 },
                { PRICE: 100, COUNT: 1, AMOUNT: 10 },
            ],
        };
        const result = (0, limit_1.calcSell)(book, 0.3, 2500);
        expect(result).toBe(2);
    });
    it('calcSell empty', () => {
        const book = {
            bids: [],
            asks: [],
        };
        const result = (0, limit_1.calcSell)(book, 0.3, 2500);
        expect(result).toBe(0);
    });
});
