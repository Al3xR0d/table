const arithmetic = (a, b, operator) => {
  // Пишите код здесь
  switch(operator) {
    case "add": {
      return a + b;
    } 
    case "subtract": {
      return a - b;
    }
    case "multiply": {
      return a * b;
    }
    case "divide": {
      return a / b;
    }
    default: {
      return NaN;
    }
  }
};

export { arithmetic };
// Для запуска теста вводим в терминале команду: npm run test:current -- arithmetic.test.js
