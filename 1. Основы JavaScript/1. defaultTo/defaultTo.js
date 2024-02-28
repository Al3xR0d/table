const defaultTo = (value, defaultValue) => {
  // Пишите код здесь

  if (value == null || value == undefined || Number.isNaN(value)) {
    return defaultValue;
  }
    return value;
};
console.log(defaultTo(undefined, 10));
module.exports = defaultTo;

let value = 10

// console.log(Number.isNaN)
console.log(isNaN(value))
// Для запуска теста вводим в терминале команду: npm run test:current -- defaultTo.test.js
