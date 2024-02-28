function replaceItemsClear(arr, item, replaceItem) {
  // Пишите код здесь
  // const newArr = arr.slice();
  // for (let i = 0; i < newArr.length; i++) {
  //   if (newArr[i] === item) {
  //     newArr[i] = replaceItem;
  //   }
  // }
  // return newArr;
  return arr.map(value => (value === item ? replaceItem : value));
}

const arr = ["1", 4, 3, 4, 1];
console.log(replaceItemsClear(arr, "1", "replaced")); // [1,'a',3,4,3,'a',1]
console.log(arr); // [1,2,3,4,3,2,1] - исходный массив не тронут

function replaceItemsMutate(arr2, item, replaceItem) {
  // Пишите код здесь
  // for (let i = 0; i < arr2.length; i++) {
  //   if (arr2[i] === item) {
  //     arr2[i] = replaceItem;
  //     arr2.splice(i, 1, arr2[i]);
  //   }
  // }
  // return arr2;
  arr2.forEach((value, i) => {
    if (value === item) arr2[i] = replaceItem;
  });
  return arr2;
}

const arr2 = [1, 4, 3, 4, 5];
console.log(replaceItemsMutate(arr2, 4, "replaced"));
console.log(arr2);

export { replaceItemsClear, replaceItemsMutate };
// Для запуска теста вводим в терминале команду: npm run test:current -- replaceItems.test.js
