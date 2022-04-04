"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bitFinexbuilder_1 = __importDefault(require("./bitFinexbuilder"));
jest.mock('ws', () => jest.fn().mockImplementation(() => ({
    on: jest.fn(),
    send: jest.fn(),
})));
describe('Socket builder test', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });
    afterEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });
    it('exchangeBuilder', () => {
        const testFn = jest.fn().mockReturnValue('foo');
        const socket = (0, bitFinexbuilder_1.default)('BTCUSD', testFn, 'mock.com');
        expect(socket).not.toBeNull;
    });
});
