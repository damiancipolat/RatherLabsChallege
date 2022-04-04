"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
let BOOK = {};
const PAIR_MAX = config_1.default.store.limit;
// CLear the store.
const clear = () => {
    BOOK = {};
};
// Initializae memory in book with pair-name money from list.
const fill = (pairList) => {
    pairList.forEach((pair) => {
        BOOK[pair] = {
            asks: [],
            bids: [],
        };
    });
};
// Get Pair book from name.
const get = (pairName) => BOOK[pairName];
// Return the private book to public.
const all = () => BOOK;
// Remove a item from an array.
const removeFromArray = (arr, obj) => arr.filter((v) => v !== obj);
// Slice and array and keep the last values set by the max from config.
const purgeLimit = (list) => list.slice(list.length - PAIR_MAX, list.length);
// Record a new bid into the dictionary.
const increaseBids = (pair, item) => {
    const pairStore = get(pair);
    // Add new value.
    pairStore.bids.push(item);
    // Keep registers into the limit.
    if (pairStore.bids.length > PAIR_MAX)
        pairStore.bids = purgeLimit(pairStore.bids);
};
// Record a new ask into the dictionary.
const increaseAsks = (pair, item) => {
    const pairStore = get(pair);
    // Add new value.
    pairStore.asks.push(item);
    // Keep registers into the limit.
    if (pairStore.asks.length > PAIR_MAX)
        pairStore.asks = purgeLimit(pairStore.asks);
};
// Remove a bid object from the array.
const decreaseBids = (pair, item) => {
    const pairStore = get(pair);
    pairStore.bids = removeFromArray(pairStore.bids, item);
};
// Remove a ask object from the array.
const decreaseAsks = (pair, item) => {
    const pairStore = get(pair);
    pairStore.asks = removeFromArray(pairStore.asks, item);
};
exports.default = {
    fill,
    get,
    clear,
    all,
    increaseAsks,
    increaseBids,
    decreaseAsks,
    decreaseBids,
    removeFromArray,
    purgeLimit,
};
