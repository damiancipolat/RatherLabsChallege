"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const orders_1 = __importDefault(require("../controller/orders"));
const router = (0, express_1.Router)();
// Bind routes with controller.
router.get('/:pair/prices', orders_1.default);
module.exports = router;
