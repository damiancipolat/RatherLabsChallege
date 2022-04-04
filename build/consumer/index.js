"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSockets = exports.boostrap = void 0;
// Load .env files.
require("dotenv/config");
const logger_1 = __importDefault(require("../utils/logger"));
const config_1 = require("../config");
const listener_1 = require("./listener");
const bitFinexbuilder_1 = __importDefault(require("./socket/bitFinexbuilder"));
const book_1 = __importDefault(require("../store/book"));
// Include host.
const { host, } = config_1.provider.bitfinex;
// Socket map.
const sockets = {};
// Create a map pair-name:socket.
const createSockets = () => {
    config_1.moneys.forEach((money) => {
        logger_1.default.debug(`CONSUMER: Register socket for pair - ${money}`);
        sockets[money] = (0, bitFinexbuilder_1.default)(money, listener_1.onMessage, host);
    });
};
exports.createSockets = createSockets;
const boostrap = () => {
    // Load store with money list.
    book_1.default.fill(config_1.moneys);
    // Create the sockets for the pair list.
    createSockets();
};
exports.boostrap = boostrap;
