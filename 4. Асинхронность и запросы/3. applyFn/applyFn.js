class ExecutionError extends Error {
  // Пишите код здесь
  constructor(message, arg, stack) {
    super(message);
    this.name = this.constructor.name;
    this.arg = arg;
    this.stack = stack;
  }

  getArgData() {
    return this.arg;
  }
}

function applyFn(dataArr, callback) {
  // Пишите код здесь
  let succeeded = [];
  let errors = [];
  dataArr.forEach(item => {
    try {
      succeeded.push(callback(item));
    } catch (err) {
      if (err instanceof Error) {
        let newError = new ExecutionError(err.message, item, err.stack);
        errors.push(newError);
      }
    }
  });
  return { succeeded, errors };
}

console.log(applyFn([1, 2, 3], arg => arg + 1));

const { succeeded, errors } = applyFn([1, 2, 3], arg => arg + 1);
console.log(succeeded); // [2, 3, 4]
console.log(errors);

export { ExecutionError, applyFn };
// Для запуска теста вводим в терминале команду: npm run test:current -- applyFn.test.js
