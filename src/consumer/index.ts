// Load .env files.
import 'dotenv/config';

import {
  moneys,
  provider,
} from '../config';

import {
  onMessage,
} from './listener';

import socketBuilder from './socket/bitFinexbuilder';
import book from '../store/book';

// Include host.
const {
  host,
} = provider.bitfinex;

// Socket map.
const sockets:any = {};

// Create a map pair-name:socket.
const createSockets = () => {
  moneys.forEach((money) => {
    console.log(`Register socket for pair - ${money}`);
    sockets[money] = socketBuilder(money, onMessage, host);
  });
};

const boostrap = () => {
  // Load store with money list.
  book.fill(moneys);

  // Create the sockets for the pair list.
  createSockets();
};

export {
  boostrap,
  createSockets,
};
