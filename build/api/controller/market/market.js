"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../../utils/logger"));
const config_1 = __importDefault(require("../../../config"));
const book_1 = __importDefault(require("../../../store/book"));
const calculations_1 = require("../../service/market/calculations");
const { moneys, } = config_1.default;
// Get a calculation function by name.
const getOperator = (type) => {
    switch (type) {
        case 'BUY':
            return calculations_1.calcBuy;
        case 'SELL':
            return calculations_1.calcSell;
        default:
            return null;
    }
};
const calcExecution = (req, res, next) => {
    try {
        const { pair, operation, ammount, } = req.params;
        logger_1.default.info(`API: Request to simulate execution - market prices pair:${pair} operation:${operation}...`);
        if (!moneys.includes(pair))
            throw new Error('Pair name not valid');
        // Find the order items by pair-name.
        const pairBook = book_1.default.get(pair);
        // Operation.
        const calculator = getOperator(operation.toUpperCase());
        if (!calculator)
            throw new Error('Operation not allowed');
        // Simulate by operation.
        const price = calculator(pairBook, parseFloat(ammount));
        res.status(200).json({
            pair,
            operation,
            price,
        });
    }
    catch (err) {
        console.log(err);
        next(err);
    }
};
exports.default = calcExecution;
