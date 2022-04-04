"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./utils/logger"));
const consumer_1 = require("./consumer");
const api_1 = __importDefault(require("./api"));
logger_1.default.info('CONSUMER: starting...');
(0, consumer_1.boostrap)();
logger_1.default.info('API: starting');
(0, api_1.default)();
