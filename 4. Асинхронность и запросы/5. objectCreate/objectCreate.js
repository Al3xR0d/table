Object.create = function(proto, propertiesObject = {}) {
  // Пишите код здесь
  let result = {};
  if (typeof proto !== "object" || proto !== null) {
    throw new TypeError();
  } else if (typeof proto === "null") {
    return {};
  }
  result = Object.setPrototypeOf({}, proto);
  if (typeof proto === "undefined") {
    Object.defineProperties(result, propertiesObject);
  }
  return result;
};
// Для запуска теста вводим в терминале команду: npm run test:current -- objectCreate.test.js
let x = 1;
console.log(x === Number);
