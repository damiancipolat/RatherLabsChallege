"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("../config"));
// Define routes and events
const routes_1 = __importDefault(require("./routes"));
const { server: { port }, } = config_1.default;
const createApi = () => {
    // Start Express-js.
    const app = (0, express_1.default)();
    http_1.default.createServer(app);
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(express_1.default.json());
    // Include routes.
    app.use('/', routes_1.default);
    // Start listen mode.
    app.listen(port, () => console.log('Listening in port', port));
    return app;
};
exports.default = createApi;
