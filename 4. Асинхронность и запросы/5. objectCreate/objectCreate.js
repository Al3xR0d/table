Object.create = function(proto, propertiesObject = {}) {
  // Пишите код здесь
  if (typeof proto !== "object" || typeof proto !== "function") {
    throw new TypeError();
  } else if (proto === null) {
    return {};
  }
  return Object.setPrototypeOf({}, proto);
};
// Для запуска теста вводим в терминале команду: npm run test:current -- objectCreate.test.js
