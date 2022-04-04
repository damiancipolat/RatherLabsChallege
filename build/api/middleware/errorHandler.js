"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../utils/logger"));
// Get the env.
const env = process.env.NODE_ENV;
//Error handler middleware.
const errorHandler = (err, req, res) => {
    const staticError = 'Internal error';
    // Extract info from error object.
    const { statusCode, status, statusText, message, } = err;
    // Get the status code.
    const statusHTTP = statusCode || status || 500;
    // Get the error detail.
    const detail = (message || statusText) || staticError;
    // Log in stderr and launch the exception to sentry.
    logger_1.default.error(`API: Error handler - message:${detail}`);
    // Return error response, only to production env use the same message
    res.status(statusHTTP).json({
        status: statusHTTP,
        message: (env === 'production') ? staticError : detail,
    });
};
exports.default = errorHandler;
