"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const market_1 = __importDefault(require("../controller/market/market"));
const limit_1 = __importDefault(require("../controller/market/limit"));
const router = (0, express_1.Router)();
// Bind routes with controller.
router.get('/execute/:pair/:operation/:ammount/', market_1.default);
router.get('/execute/:pair/:operation/:ammount/limit/:limit', limit_1.default);
module.exports = router;
