"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../utils/logger"));
const config_1 = __importDefault(require("../../config"));
const book_1 = __importDefault(require("../../store/book"));
const bidAsk_1 = require("../service/bidAsk");
const { moneys, } = config_1.default;
const getPrices = (req, res, next) => {
    try {
        const { pair, } = req.params;
        logger_1.default.info(`API: Request to get prices ${pair}...`);
        if (!moneys.includes(pair))
            throw new Error('Pair name not valid');
        // Find the order items by pair-name.
        const pairBook = book_1.default.get(pair);
        // Get prices.
        const askPrice = (0, bidAsk_1.getBestAsk)(pairBook.asks);
        const bidPrice = (0, bidAsk_1.getBestBid)(pairBook.bids);
        // Prepare response.
        res.status(200).json({
            pair,
            bid: bidPrice,
            ask: askPrice,
        });
    }
    catch (err) {
        next(err);
    }
};
exports.default = getPrices;
