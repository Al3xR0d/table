function compareWithPrecision(a, b, precision) {
  // Пишите код здесь
  return Math.abs(a - b) == precision
}

console.log(compareWithPrecision(0.2, 0.1, 0.1))

module.exports = compareWithPrecision;

// Для запуска теста вводим в терминале команду: npm run test:current -- compareWithPrecision.test.js
