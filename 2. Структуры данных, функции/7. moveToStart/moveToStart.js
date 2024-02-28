const moveToStart = (arr, n) => {
  // Пишите код здесь
  if (arr.length <= n) {
    return arr;
  } else {
    // for (let i = arr.length - n; i < arr.length; i++) {
    //   startArr.push(arr[i]);
    // }
    // for (let i = 0; i < arr.length - n; i++) {
    //   endArr.push(arr[i]);
    // }
    let startArr = arr.slice(arr.length - n);
    let endArr = arr.slice(0, arr.length - n);
    // console.log(endArr);
    return startArr.concat(endArr);
  }
};
console.log(moveToStart([1, 2, 3, 4, 5, 1, 2], 3));
export { moveToStart };
// Для запуска теста вводим в терминале команду: npm run test:current -- moveToStart.test.js

let arr = [1, 2, 3, 4, 5];
let arr2 = [6];

console.log(arr.concat(arr2));
