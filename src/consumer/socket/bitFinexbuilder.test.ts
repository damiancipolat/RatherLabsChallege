import builder from './bitFinexbuilder';

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
    const socket = builder('BTCUSD', testFn, 'mock.com');
    expect(socket).not.toBeNull;
  });
});
