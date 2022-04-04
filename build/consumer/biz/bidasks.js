"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bidAskDecrease = exports.bidAskIncrease = exports.bidAskLogic = void 0;
const book_1 = __importDefault(require("../../store/book"));
const logger_1 = __importDefault(require("../../utils/logger"));
// Handle the process to decrease the bids.
const bidAskIncrease = (bookItem, pair) => {
    if (bookItem.AMOUNT > 0) {
        book_1.default.increaseBids(pair, bookItem);
    }
    else {
        book_1.default.increaseAsks(pair, bookItem);
    }
};
exports.bidAskIncrease = bidAskIncrease;
// Handle the process to decrease the asks.
const bidAskDecrease = (bookItem, pair) => {
    if (bookItem.AMOUNT === 1) {
        book_1.default.decreaseBids(pair, bookItem);
    }
    if (bookItem.AMOUNT === -1) {
        book_1.default.decreaseAsks(pair, bookItem);
    }
};
exports.bidAskDecrease = bidAskDecrease;
// Handle the main logic for process the book orders.
const bidAskLogic = (bookItem, pair) => {
    const { COUNT, PRICE, AMOUNT, } = bookItem;
    logger_1.default.debug(`CONSUMER: ${pair}} Received value ${PRICE}:${COUNT}:${AMOUNT}`);
    if (COUNT > 0)
        bidAskIncrease({ PRICE, COUNT, AMOUNT }, pair);
    if (COUNT === 0)
        bidAskDecrease({ PRICE, COUNT, AMOUNT }, pair);
};
exports.bidAskLogic = bidAskLogic;
