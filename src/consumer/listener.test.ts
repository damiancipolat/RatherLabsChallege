import book from '../store/book';
import {
  updateBook,
} from './listener';

describe('Listener tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it('updateBook - bad pair name', () => {
    book.clear();
    book.fill(['BTCUSD']);

    const mock = {
      pair: 'BTCUSD',
      chanelId: 111,
      tips: [],
    };

    const result = updateBook(mock);
    expect(result).toBeNull;
  });

  it('updateBook - process array', () => {
    // Prepare the book.
    book.clear();
    book.fill(['BTCUSD']);

    const item = {
      PRICE: 20000,
      COUNT: 10,
      AMOUNT: 1000,
    };

    book.increaseAsks('BTCUSD', item);

    // Process.
    const mock = {
      pair: 'BTCUSD',
      chanelId: 111,
      tips: [
        {
          PRICE: 1,
          COUNT: 1,
          AMOUNT: 1,
        },
      ],
    };

    const result = updateBook(mock);
    expect(result).toStrictEqual([
      {
        PRICE: 1,
        COUNT: 1,
        AMOUNT: 1,
      },
    ]);
  });
});
