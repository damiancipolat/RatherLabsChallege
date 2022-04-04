"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBook = exports.onMessage = void 0;
const book_1 = __importDefault(require("../store/book"));
const logger_1 = __importDefault(require("../utils/logger"));
const validators_1 = require("./message/validators");
const parsers_1 = require("./message/parsers");
const bidasks_1 = require("./biz/bidasks");
// Process the book and handle the update.
const updateBook = (bookData) => {
    const { pair, tips, } = bookData;
    // Get the pair book by the pair-name.
    const pairInfo = book_1.default.get(pair);
    // Validate if the pair-name exists.
    if (!pairInfo) {
        logger_1.default.info(`CONSUMER: Pair name ${pair} not found in book, unable to store.`);
        return null;
    }
    // Process tips.
    if (Array.isArray(tips) && tips.length > 0) {
        logger_1.default.info(`CONSUMER: Updating pair ${pair}.`);
        tips.forEach((tip) => (0, bidasks_1.bidAskLogic)(tip, pair));
        return tips;
    }
    return null;
};
exports.updateBook = updateBook;
// Process every message received from the socket.
const onMessage = (message) => {
    try {
        const { pair, msg, } = message;
        const payload = JSON.parse(msg.toString());
        if ((0, validators_1.checkBookFormat)(payload)) {
            const parsed = (0, parsers_1.parseBookData)(pair, payload);
            updateBook(parsed);
        }
        else {
            logger_1.default.error(`CONSUMER: ${pair} invalid message format`);
        }
    }
    catch (err) {
        logger_1.default.error(`CONSUMER: ${err.message}`);
    }
};
exports.onMessage = onMessage;
