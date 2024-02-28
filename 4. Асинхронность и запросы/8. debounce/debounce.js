const debounce = (fn, delay) => {
  // Пишите код здесь
  let timeout;
  return function() {
    clearTimeout(timeout);
    let func = () => {
      fn.apply(this, arguments);
    };
    timeout = setTimeout(func, delay);
  };
};

export { debounce };
// Для запуска теста вводим в терминале команду: npm run test:current -- debounce.test.js
