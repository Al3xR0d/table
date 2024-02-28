function findAllIndices(arr, value) {
  // Пишите код здесь
  // let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === value) {
  //     newArr.push(i);
  //   }
  // }
  // return newArr;
  const resArr = [];
  arr.forEach((item, index, arr) => {
    if (item === value) {
      resArr.push(index);
    }
  });
  return resArr;
}

console.log(findAllIndices([1, 0, 1, 0, 0, 1], 0));

export { findAllIndices };
// Для запуска теста вводим в терминале команду: npm run test:current -- findAllIndices.test.js
