import {
  clear,
  fill,
  all,
  get,
  removeFromArray,
  purgeLimit,
  increaseBids,
  increaseAsks,
  decreaseBids,
  decreaseAsks
} from './book';

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
    
    fill(['ARS_USD','BTC_ARS']);
    clear();
    const book = all();

    expect(book).toStrictEqual({});

  });

  it('fill store with money list', () => {
    
    clear();
    fill(['ARS_USD','BTC_ARS']);
    const book = all();
    const compare={
      ARS_USD:{
        bids:[],
        asks:[]
      },
      BTC_ARS:{
        bids:[],
        asks:[]
      }
    };

    expect(book).toStrictEqual(compare);

  });

  it('get all the store data', () => {
    clear();
    fill(['BTCUSD']);
    const book = all();
    const compare={
      BTCUSD:{
        bids:[],
        asks:[]
      }
    };

    expect(book).toStrictEqual(compare);
  });
  
  it('get pair from name', () => {
    clear();
    fill(['BTCUSD']);
    const btcusd = get('BTCUSD');
    const compare={
        bids:[],
        asks:[]
    };

    expect(btcusd).toStrictEqual(compare);
  });

  it('remove from array', () => {
    const mock = ['a','b','c','d','e'];
    const result = removeFromArray(mock,'c');
    const compare = ['a','b','d','e'];

    expect(result).toStrictEqual(compare);
  });

  it('purgeLimit', () => {
    const mock = ['a','b','c','d','e'];
    const result = removeFromArray(mock,'c');
    const compare = ['a','b','d','e'];

    expect(result).toStrictEqual(compare);
  });

  it('include new bid in the store', () => {

    const item = {
      PRICE:20000,
      COUNT:10,
      AMOUNT:1000
    };

    //Clear, fill the store.
    clear();
    fill(['btcusd']);

    //Include new item.
    increaseBids('btcusd',item);
    const book = get("btcusd");

    expect(book.bids).toStrictEqual([item]);
  });

  it('include new ask in the store', () => {

    const item = {
      PRICE:20000,
      COUNT:10,
      AMOUNT:1000
    };

    //Clear, fill the store.
    clear();
    fill(['btcusd']);

    //Include new item.
    increaseAsks('btcusd',item);
    const book = get("btcusd");

    expect(book.asks).toStrictEqual([item]);
  });    
  
  it('decrease bid in the store', () => {

    const item1 = {
      PRICE:20000,
      COUNT:10,
      AMOUNT:1000
    };

    const item2 = {
      PRICE:30000,
      COUNT:100,
      AMOUNT:100
    };

    const item3 = {
      PRICE:30,
      COUNT:10,
      AMOUNT:4400
    };    

    //Clear, fill the store.
    clear();
    fill(['btcusd']);

    //Include new item.
    increaseBids('btcusd',item1);
    increaseBids('btcusd',item2);
    increaseBids('btcusd',item3);

    //Remove bid.
    const book = get("btcusd");
    decreaseBids("btcusd",item2);   

    expect(book.bids).toStrictEqual([item1,item3]);
  });

  it('decrease asks in the store', () => {

    const item1 = {
      PRICE:20000,
      COUNT:10,
      AMOUNT:1000
    };

    const item2 = {
      PRICE:30000,
      COUNT:100,
      AMOUNT:100
    };

    const item3 = {
      PRICE:30,
      COUNT:10,
      AMOUNT:4400
    };    

    //Clear, fill the store.
    clear();
    fill(['btcusd']);

    //Include new item.
    increaseAsks('btcusd',item1);
    increaseAsks('btcusd',item2);
    increaseAsks('btcusd',item3);

    //Remove bid.
    const book = get("btcusd");
    decreaseAsks("btcusd",item2);   

    expect(book.asks).toStrictEqual([item1,item3]);
  });    

});
