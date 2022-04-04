"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcSell = exports.calcBuy = void 0;
const bidAsk_1 = require("../bidAsk");
// Calculate the price for a buy operation.
const calcBuy = (pair, amount) => {
    // Get bids.
    const bidItem = (0, bidAsk_1.getBestBid)(pair.bids);
    return bidItem.PRICE * amount;
};
exports.calcBuy = calcBuy;
const calcSell = (pair, amount) => {
    // Get bids.
    const askItem = (0, bidAsk_1.getBestAsk)(pair.asks);
    return askItem.PRICE * amount;
};
exports.calcSell = calcSell;
