"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validators_1 = require("./validators");
describe('Message validations', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });
    afterEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });
    it('CheckItemTuple false', () => {
        expect((0, validators_1.checkItemTuple)([1, 2, 'a'])).toBeTruthy;
    });
    it('CheckItemTuple true', () => {
        expect((0, validators_1.checkItemTuple)([1, 2, 3])).toBeTruthy;
    });
    it('checkBookFormat bad format', () => {
        expect((0, validators_1.checkBookFormat)([1, 'a'])).toBeFalsy;
    });
    it('checkBookFormat good format 1', () => {
        expect((0, validators_1.checkBookFormat)([1, [[1, 2, 3], [1, 2]]])).toBeTruthy;
    });
    it('checkBookFormat good format 2', () => {
        expect((0, validators_1.checkBookFormat)([1, [[1, 2, 3], [1, 2, 3]]])).toBeFalsy;
    });
});
