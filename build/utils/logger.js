"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const package_json_1 = __importDefault(require("../../package.json"));
exports.default = (0, pino_1.default)({
    name: package_json_1.default.name,
    level: 'debug',
    transport: {
        target: 'pino-pretty',
    },
    options: {
        colorize: true,
    },
});
