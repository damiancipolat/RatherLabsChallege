import {
    checkItemTuple,
    checkBookFormat
} from '../message/validators';  
  
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
        const result = checkItemTuple([1,2,'a']);
        expect(result).toBeTruthy;
    });

    it('CheckItemTuple true', () => {
        const result = checkItemTuple([1,2,3]);
        expect(result).toBeTruthy;
    });

    it('checkBookFormat bad format', () => {
        const result = checkBookFormat([1,'a']);
        expect(result).toBeFalsy;
    });

    it('checkBookFormat good format 1', () => {
        const result = checkBookFormat([1,[[1,2,3],[1,2]]]);
        expect(result).toBeTruthy;
    });

    it('checkBookFormat good format 2', () => {
        const result = checkBookFormat([1,[[1,2,3],[1,2,3]]]);
        expect(result).toBeFalsy;
    });

});