import { TBookItem } from '../../store/book.type';

const getBestBid = (bids:TBookItem[]):TBookItem => {
  bids.sort((a:TBookItem, b:TBookItem) => ((a.PRICE > b.PRICE) ? -1 : 1));
  return bids[0];
};

const getBestAsk = (asks:TBookItem[]):TBookItem => {
  asks.sort((a:TBookItem, b:TBookItem) => ((a.PRICE < b.PRICE) ? -1 : 1));
  return asks[0];
};

export {
  getBestAsk,
  getBestBid,
};

/*

bids - compra,

    ordenar por prices y obtener el mayor

    {PRICE,COUNT,AMOUNT}
    {PRICE,COUNT,AMOUNT}
    {PRICE,COUNT,AMOUNT}
    {PRICE,COUNT,AMOUNT}
    {PRICE,COUNT,AMOUNT}
    {PRICE,COUNT,AMOUNT}
    {PRICE,COUNT,AMOUNT}
    {PRICE,COUNT,AMOUNT}
    {PRICE,COUNT,AMOUNT}
    {PRICE,COUNT,AMOUNT}

para el 1er endpoint.
asks - venta

    ordenar por el menor precio de venta

    {PRICE,COUNT,AMOUNT}
    {PRICE,COUNT,AMOUNT}
    {PRICE,COUNT,AMOUNT}
    {PRICE,COUNT,AMOUNT}
    {PRICE,COUNT,AMOUNT}
    {PRICE,COUNT,AMOUNT}
    {PRICE,COUNT,AMOUNT}
    {PRICE,COUNT,AMOUNT}
    {PRICE,COUNT,AMOUNT}
    {PRICE,COUNT,AMOUNT}

*/

/*
Para comprar:

    BID=45892.5
    MONTO=1

    BID*MONTO

Para vender:

    BID=45892.5
    MONTO=1
*/

/*
book {
  asks: [
    { PRICE: 46451, COUNT: 2, AMOUNT: -0.346219 },
    { PRICE: 46459, COUNT: 1, AMOUNT: -0.26480692 },
    { PRICE: 46460, COUNT: 1, AMOUNT: -0.00203984 },
    { PRICE: 46462, COUNT: 3, AMOUNT: -1.44216749 }
  ],
  bids: [
    { PRICE: 46411, COUNT: 3, AMOUNT: 0.43923983 },
    { PRICE: 46409, COUNT: 2, AMOUNT: 0.41666218 },
    { PRICE: 46407, COUNT: 1, AMOUNT: 0.2104 },
    { PRICE: 46405, COUNT: 2, AMOUNT: 0.14284675 }
  ]
}

*/
