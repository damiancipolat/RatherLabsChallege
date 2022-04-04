"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const notFound_1 = __importDefault(require("../middleware/notFound"));
const errorHandler_1 = __importDefault(require("../middleware/errorHandler"));
const health_1 = __importDefault(require("./health"));
const orders_1 = __importDefault(require("./orders"));
const market_1 = __importDefault(require("./market"));
const router = (0, express_1.Router)();
router.use('/health', health_1.default);
router.use('/orders/', orders_1.default);
router.use('/market/', market_1.default);
router.use(errorHandler_1.default);
router.get('*', notFound_1.default);
module.exports = router;
