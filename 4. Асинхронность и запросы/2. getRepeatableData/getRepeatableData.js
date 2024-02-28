class AttemptsLimitExceeded extends Error {
  constructor() {
    super("Max attempts limit exceed");
    this.name = "AttemptsLimitExceeded";
  }
}

class NotFoundError extends Error {
  constructor() {
    super("Not found");
    this.name = "NotFoundError";
  }
}

class TemporaryError extends Error {
  constructor() {
    super("TemporaryError");
    this.name = "TemporaryError";
  }
}

function getRepeatableData(getData, key, maxRequestsNumber) {
  // Пишите код здесь

  // while (counter <= maxRequestsNumber) {
  try {
    return getData(key);
  } catch (err) {
    if (err.name === "NotFoundError") {
      throw new NotFoundError();
    }
    if (err.name === "TemporaryError") {
      --maxRequestsNumber;
      if (-1 === maxRequestsNumber) {
        throw new AttemptsLimitExceeded();
      } else return getRepeatableData(getData, key, maxRequestsNumber);
    }
  }
  // }
}

let counter = -1;

const getData = name => "Hello, " + name;
const res = getRepeatableData(getData, "Ivan", 3);

console.log(res);

export {
  AttemptsLimitExceeded,
  NotFoundError,
  TemporaryError,
  getRepeatableData
};
// Для запуска теста вводим в терминале команду: npm run test:current -- getRepeatableData.test.js
