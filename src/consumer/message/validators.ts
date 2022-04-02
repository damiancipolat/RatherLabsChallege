// Validate if the tuple [PRICE,COUNT,AMOUNT] is correctly.
const checkItemTuple = (item:any):boolean => Array.isArray(item)
    && item.length === 3
    && (typeof item[0] === 'number')
    && (typeof item[1] === 'number')
    && (typeof item[2] === 'number');

// Validate if the object has the right format to be parsed.
const checkBookFormat = (value:any):boolean => {
  // Validate if the body has good format.
  if (!(Array.isArray(value) && value.length === 2 && Array.isArray(value[1]))) return false;

  // Validate if the tips are correcty.
  if (!(checkItemTuple(value[1]) || value[1].every((e) => checkItemTuple(e)))) return false;

  return true;
};

export {
  checkBookFormat,
  checkItemTuple,
};
