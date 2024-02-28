const hasArrays = values => {
  // Пишите код здесь

  // return values.filter(el => Array.isArray(el)).length > 0;
  return values.some(el => Array.isArray(el));

  // for (let i = 0; i < values.length; i++) {
  //   if (Array.isArray(values[i]) && values[i].length > 0) {
  //     return true;
  //   }
  // }
  // return false;
};
console.log(hasArrays([1, 2, [1]]));
export { hasArrays };
// Для запуска теста вводим в терминале команду: npm run test:current -- hasArrays.test.js

// let arr = [false, true, [1, 2], {}, [], 1, 0, NaN];
// console.log(arr[0]);
