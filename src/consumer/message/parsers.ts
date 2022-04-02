import {
  TBookItem,
  TBookData,
} from '../../store/book.type';

import {
  checkItemTuple,
} from './validators';

// Receive a tuple of number and create a TbookItem.
const parseTuple = (tuple:[number, number, number]):TBookItem => ({
  PRICE: tuple[0],
  COUNT: tuple[1],
  AMOUNT: tuple[2],
});

// Receive an object or a tuple and cast into TbookItem.
const parseBookItem = (item:any):TBookItem[] => ((checkItemTuple(item))
  ? [parseTuple(item)]
  : item.map((e:[number, number, number]) => parseTuple(e)));

// Receive a tuple array and convert into tbookdata.
const parseBookData = (pair:string, orderData:[number, any]):TBookData => ({
  pair,
  chanelId: orderData[0],
  tips: parseBookItem(orderData[1]),
});

export {
  parseTuple,
  parseBookData,
  parseBookItem,
};
