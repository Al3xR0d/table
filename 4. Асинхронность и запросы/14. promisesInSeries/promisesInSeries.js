async function promisesInSeries(asyncFns) {
  // Пишите код здесь
  let arr = [];

  for (let item of asyncFns) {
    arr.push(await item(arr[arr.length - 1]));
  }

  return arr[arr.length - 1];
}

export { promisesInSeries };
// Для запуска теста вводим в терминале команду: npm run test:current -- promisesInSeries.test.js
