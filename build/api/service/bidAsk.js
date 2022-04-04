"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBestBid = exports.getBestAsk = void 0;
const getBestBid = (bids) => {
    if (bids.length === 0)
        throw new Error('Empty array not allowed');
    bids.sort((a, b) => ((a.PRICE > b.PRICE) ? -1 : 1));
    return bids[0];
};
exports.getBestBid = getBestBid;
const getBestAsk = (asks) => {
    if (asks.length === 0)
        throw new Error('Empty array not allowed');
    asks.sort((a, b) => ((a.PRICE < b.PRICE) ? -1 : 1));
    return asks[0];
};
exports.getBestAsk = getBestAsk;
