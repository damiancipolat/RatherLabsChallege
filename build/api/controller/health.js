"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const health = (req, res) => {
    res.status(200).json({ health: 'OK' });
};
exports.default = health;
