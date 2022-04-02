import {
  checkItemTuple,
  checkBookFormat,
} from './validators';

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
    expect(checkItemTuple([1, 2, 'a'])).toBeTruthy;
  });

  it('CheckItemTuple true', () => {
    expect(checkItemTuple([1, 2, 3])).toBeTruthy;
  });

  it('checkBookFormat bad format', () => {
    expect(checkBookFormat([1, 'a'])).toBeFalsy;
  });

  it('checkBookFormat good format 1', () => {
    expect(checkBookFormat([1, [[1, 2, 3], [1, 2]]])).toBeTruthy;
  });

  it('checkBookFormat good format 2', () => {
    expect(checkBookFormat([1, [[1, 2, 3], [1, 2, 3]]])).toBeFalsy;
  });
});
