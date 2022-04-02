"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe('Card controller ', () => {
    afterEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });
    describe('test add function', () => {
        it('should return 15 for add(10,5)', () => {
            expect(10 + 5).toBe(15);
        });
        it('should return 5 for add(2,3)', () => {
            expect(2 + 3).toBe(5);
        });
    });
});
