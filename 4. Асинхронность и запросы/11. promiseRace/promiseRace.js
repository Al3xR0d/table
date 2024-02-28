function promiseRace(promises) {
  // Пишите код здесь
  return new Promise((resolve, reject) => {
    promises.forEach(item => {
      item.then(resolve, reject);
    });
  });
}

export { promiseRace };
// Для запуска теста вводим в терминале команду: npm run test:current -- promiseRace.test.js
