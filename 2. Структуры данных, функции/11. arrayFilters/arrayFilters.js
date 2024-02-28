const inRange = (a, b) => {
  // Пишите код здесь
  return num => {
    if (a > b) return false;
    return num >= a && num <= b;
  };
};

const arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

console.log(arr.filter(inRange(3, 6)));
//
//
//
//
//
const inArray = arr => {
  // Пишите код здесь
  // return arr.filter(item => arr2.includes(item));
  return item => arr.includes(item);
  // arr.every(val => arr2.includes(val));
};

const arr2 = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

console.log(arr2.filter(inArray([1, 2, 10, undefined])));
//
//
//
//
//
const notInArray = arr => {
  // Пишите код здесь
  return item => !arr.includes(item);
};

const arr3 = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

console.log(arr3.filter(notInArray([1, 2, 3, 4, 5, 6, 7, true])));

export { inArray, inRange, notInArray };
// Для запуска теста вводим в терминале команду: npm run test:current -- arrayFilters.test.js
