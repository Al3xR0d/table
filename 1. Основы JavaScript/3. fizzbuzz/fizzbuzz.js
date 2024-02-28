function fizzbuzz(number) {
  // Пишите код здесь
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  }
  else if (number % 5 === 0) {
    return "Buzz";
  }
  else if (number % 3 === 0) {
    return "Fizz";
  }
  else {
    return number;
  }
}

export { fizzbuzz };
// Для запуска теста вводим в терминале команду: npm run test:current -- fizzbuzz.test.js
