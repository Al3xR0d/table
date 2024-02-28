const throttle = (fn, delay) => {
  // Пишите код здесь
  let active = false;
  // let currentThis;
  // let currentArguments;

  function func() {
    if (active === true) {
      // currentThis = this;
      // currentArguments = arguments;
      return;
    }

    fn.apply(this, arguments);

    active = true;

    setTimeout(() => {
      active = false;
      // if (currentArguments === true) {
      //   func.apply(this, arguments);
      // currentThis = null;
      // currentArguments = null;
      // }
    }, delay);
  }
  return func;
};

export { throttle };
// Для запуска теста вводим в терминале команду: npm run test:current -- throttle.test.js
