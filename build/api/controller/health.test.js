"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const health_1 = __importDefault(require("./health"));
describe('Health controller', () => {
    const jsonMock = jest.fn();
    const statusMock = jest.fn();
    const resMock = {
        status: statusMock.mockImplementation(() => ({
            json: jsonMock,
        })),
    };
    afterEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });
    it('health success', () => __awaiter(void 0, void 0, void 0, function* () {
        // Call the controller.
        (0, health_1.default)({}, resMock);
        const compare = { health: 'OK' };
        // Assertions.
        expect(statusMock).toHaveBeenCalledWith(200);
        expect(jsonMock).toHaveBeenCalledWith(compare);
    }));
});
