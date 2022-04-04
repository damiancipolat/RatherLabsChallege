"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcSell = exports.calcBuy = void 0;
// Calculate the price for a buy operation.
const calcBuy = (pair, amount, limit) => {
    if (!limit)
        throw new Error('Limit value is required');
    const priceLimit = amount * limit;
    // Filter and order the orders.
    const result = pair.bids
        .filter((order) => order.PRICE < priceLimit)
        .sort((x, y) => (x.PRICE < y.PRICE ? 1 : -1));
    return result.length > 0 ? result[0].COUNT : 0;
};
exports.calcBuy = calcBuy;
const calcSell = (pair, amount, limit) => {
    if (!limit)
        throw new Error('Limit value is required');
    const priceLimit = amount * limit;
    // Filter and order the orders.
    const result = pair.asks
        .filter((order) => order.PRICE > priceLimit)
        .sort((x, y) => (x.PRICE > y.PRICE ? 1 : -1));
    return result.length > 0 ? result[0].COUNT : 0;
};
exports.calcSell = calcSell;
