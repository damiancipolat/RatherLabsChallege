"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const logger_1 = __importDefault(require("../../utils/logger"));
// Function that create a event emmiter to communicate with the provicers socket.
const exchangeBuilder = (pair, msgHandler, host) => {
    // eslint-disable-next-line new-cap
    const socket = new ws_1.default(host);
    socket.on('open', () => {
        logger_1.default.info(`CONSUMER: Socket open to: - ${pair}`);
        const subscription = JSON.stringify({
            event: 'subscribe',
            channel: 'book',
            freq: 'F1',
            pair,
            prec: 'P0',
        });
        socket.send(subscription);
    });
    socket.on('message', (msg) => msgHandler({ pair, msg }));
    return socket;
};
exports.default = exchangeBuilder;
