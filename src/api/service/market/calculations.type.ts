/* eslint-disable no-unused-vars  */

import {
  TPairBook,
} from '../../../store/book.type';

interface ICalculate {
  (pair:TPairBook, amount:number, limit?:number): number;
}

export default ICalculate;
