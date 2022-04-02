import book from './book';

describe('Store test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it('clear store', () => {
    book.fill(['ARS_USD', 'BTC_ARS']);
    book.clear();
    const bookTmp = book.all();

    expect(bookTmp).toStrictEqual({});
  });

  it('fill store with money list', () => {
    book.clear();
    book.fill(['ARS_USD', 'BTC_ARS']);
    const bookTmp = book.all();
    const compare = {
      ARS_USD: {
        bids: [],
        asks: [],
      },
      BTC_ARS: {
        bids: [],
        asks: [],
      },
    };

    expect(bookTmp).toStrictEqual(compare);
  });

  it('get all the store data', () => {
    book.clear();
    book.fill(['BTCUSD']);
    const bookTmp = book.all();
    const compare = {
      BTCUSD: {
        bids: [],
        asks: [],
      },
    };

    expect(bookTmp).toStrictEqual(compare);
  });

  it('get pair from name', () => {
    book.clear();
    book.fill(['BTCUSD']);
    const btcusd = book.get('BTCUSD');
    const compare = {
      bids: [],
      asks: [],
    };

    expect(btcusd).toStrictEqual(compare);
  });

  it('remove from array', () => {
    const mock = ['a', 'b', 'c', 'd', 'e'];
    const result = book.removeFromArray(mock, 'c');
    const compare = ['a', 'b', 'd', 'e'];

    expect(result).toStrictEqual(compare);
  });

  it('purgeLimit', () => {
    const mock = ['a', 'b', 'c', 'd', 'e'];
    const result = book.removeFromArray(mock, 'c');
    const compare = ['a', 'b', 'd', 'e'];

    expect(result).toStrictEqual(compare);
  });

  it('include new bid in the store', () => {
    const item = {
      PRICE: 20000,
      COUNT: 10,
      AMOUNT: 1000,
    };

    // Clear, fill the store.
    book.clear();
    book.fill(['btcusd']);

    // Include new item.
    book.increaseBids('btcusd', item);
    const bookTmp = book.get('btcusd');

    expect(bookTmp.bids).toStrictEqual([item]);
  });

  it('include new ask in the store', () => {
    const item = {
      PRICE: 20000,
      COUNT: 10,
      AMOUNT: 1000,
    };

    // Clear, fill the store.
    book.clear();
    book.fill(['btcusd']);

    // Include new item.
    book.increaseAsks('btcusd', item);
    const bookTmp = book.get('btcusd');

    expect(bookTmp.asks).toStrictEqual([item]);
  });

  it('decrease bid in the store', () => {
    const item1 = {
      PRICE: 20000,
      COUNT: 10,
      AMOUNT: 1000,
    };

    const item2 = {
      PRICE: 30000,
      COUNT: 100,
      AMOUNT: 100,
    };

    const item3 = {
      PRICE: 30,
      COUNT: 10,
      AMOUNT: 4400,
    };

    // Clear, fill the store.
    book.clear();
    book.fill(['btcusd']);

    // Include new item.
    book.increaseBids('btcusd', item1);
    book.increaseBids('btcusd', item2);
    book.increaseBids('btcusd', item3);

    // Remove bid.
    const bookTmp = book.get('btcusd');
    book.decreaseBids('btcusd', item2);

    expect(bookTmp.bids).toStrictEqual([item1, item3]);
  });

  it('decrease asks in the store', () => {
    const item1 = {
      PRICE: 20000,
      COUNT: 10,
      AMOUNT: 1000,
    };

    const item2 = {
      PRICE: 30000,
      COUNT: 100,
      AMOUNT: 100,
    };

    const item3 = {
      PRICE: 30,
      COUNT: 10,
      AMOUNT: 4400,
    };

    // Clear, fill the store.
    book.clear();
    book.fill(['btcusd']);

    // Include new item.
    book.increaseAsks('btcusd', item1);
    book.increaseAsks('btcusd', item2);
    book.increaseAsks('btcusd', item3);

    // Remove bid.
    const bookTmp = book.get('btcusd');
    book.decreaseAsks('btcusd', item2);

    expect(bookTmp.asks).toStrictEqual([item1, item3]);
  });
});
