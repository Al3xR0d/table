function promiseAll(promises) {
  // Пишите код здесь
  return new Promise((resolve) => {
    let result = [];
    let counter = 0;
    if (promises.length === 0) {
      resolve([]);
    }
    promises.forEach((item, index) => {
      item.then(value => {
        result[index] = value;
        counter++;
        if (counter === promises.length) {
          resolve(result);
        }
      });
    });
  });
}

export { promiseAll };
// Для запуска теста вводим в терминале команду: npm run test:current -- promiseAll.test.js
