"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBookItem = exports.parseBookData = exports.parseTuple = void 0;
const validators_1 = require("./validators");
// Receive a tuple of number and create a TbookItem.
const parseTuple = (tuple) => ({
    PRICE: tuple[0],
    COUNT: tuple[1],
    AMOUNT: tuple[2],
});
exports.parseTuple = parseTuple;
// Receive an object or a tuple and cast into TbookItem.
const parseBookItem = (item) => (((0, validators_1.checkItemTuple)(item))
    ? [parseTuple(item)]
    : item.map((e) => parseTuple(e)));
exports.parseBookItem = parseBookItem;
// Receive a tuple array and convert into tbookdata.
const parseBookData = (pair, orderData) => ({
    pair,
    chanelId: orderData[0],
    tips: parseBookItem(orderData[1]),
});
exports.parseBookData = parseBookData;
