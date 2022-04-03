/* eslint-disable no-unused-vars  */

import {
  TPairBook,
} from '../../../store/book.type';

interface ICalculate {
  (pair:TPairBook, amount:number): number;
}

export default ICalculate;
