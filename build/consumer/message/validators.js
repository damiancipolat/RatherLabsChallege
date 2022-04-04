"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkItemTuple = exports.checkBookFormat = void 0;
// Validate if the tuple [PRICE,COUNT,AMOUNT] is correctly.
const checkItemTuple = (item) => Array.isArray(item)
    && item.length === 3
    && (typeof item[0] === 'number')
    && (typeof item[1] === 'number')
    && (typeof item[2] === 'number');
exports.checkItemTuple = checkItemTuple;
// Validate if the object has the right format to be parsed.
const checkBookFormat = (value) => {
    // Validate if the body has good format.
    if (!(Array.isArray(value) && value.length === 2 && Array.isArray(value[1])))
        return false;
    // Validate if the tips are correcty.
    if (!(checkItemTuple(value[1]) || value[1].every((e) => checkItemTuple(e))))
        return false;
    return true;
};
exports.checkBookFormat = checkBookFormat;
