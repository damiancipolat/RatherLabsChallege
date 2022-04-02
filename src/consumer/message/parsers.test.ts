import {
  parseTuple,
  parseBookData,
  parseBookItem,
} from './parsers';

describe('Message parser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it('ParseTuple', () => {
    const result = parseTuple([1, 2, 3]);
    const compare = {
      PRICE: 1,
      COUNT: 2,
      AMOUNT: 3,
    };

    expect(result).toStrictEqual(compare);
  });

  it('parseBookItem object', () => {
    const result = parseBookItem([1, 2, 3]);
    const compare = {
      PRICE: 1,
      COUNT: 2,
      AMOUNT: 3,
    };

    expect(result).toStrictEqual([compare]);
  });

  it('parseBookItem list of object', () => {
    const result = parseBookItem([[1, 2, 3], [4, 5, 6]]);
    const compare = [
      {
        PRICE: 1,
        COUNT: 2,
        AMOUNT: 3,
      },
      {
        PRICE: 4,
        COUNT: 5,
        AMOUNT: 6,
      },
    ];

    expect(result).toStrictEqual(compare);
  });

  it('parseBookData', () => {
    const result = parseBookData(
      'ARSUSD',
      [11, [10, 11, 12]],
    );

    const compare = {
      pair: 'ARSUSD',
      chanelId: 11,
      tips: [{ PRICE: 10, COUNT: 11, AMOUNT: 12 }],
    };

    expect(result).toStrictEqual(compare);
  });
});
