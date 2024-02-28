import { replaceItemsMutate } from "../../2. Структуры данных, функции/3. replaceItems/replaceItems";

function isEmpty(obj) {
  return Object.values(obj).length == 0;
}

const object = {};

console.log(isEmpty(object));

function isEmptyWithProtos(obj) {
  // Пишите код здесь
  // for (let key in obj) {
  //   if (obj.hasOwnProperty(key)) {
  //     return false;
  //   }
  // }

  // if (Object.keys(obj).length == 0 && Object.getPrototypeOf(obj) !== null) {
  //   return false;
  // }
  // const prototype = Object.getPrototypeOf(obj);
  // if (prototype == null) {
  //   return isEmptyWithProtos(prototype);
  // }

  // return true;

  // for (let key in obj) {
  //   if (obj.hasOwnProperty(key)) {
  //     return false;
  //   }
  // }

  // // const hasProto = Object.getPrototypeOf(obj) !== null;
  // // if (Object.keys(obj).length == 0) {
  // //   return true;
  // // }

  // // if (
  // //   (Object.keys(obj).length == 0 && Object.getPrototypeOf(obj) !== null) ||
  // //   (Object.keys(obj).length == 0 && hasProto)
  // // ) {
  // //   return false;
  // // }

  // const prototype = Object.getPrototypeOf(obj);
  // if (prototype !== null && prototype !== Object.prototype) {
  //   return isEmptyWithProtos(prototype);
  // }

  // return true;

  if (Object.getOwnPropertyNames(obj).length > 0) return false;
  const proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  return isEmptyWithProtos(proto);
}

const protoObj = Object.create(null);
const obj = Object.create(protoObj);

console.log(isEmptyWithProtos(obj));
console.log(isEmptyWithProtos({}));

export { isEmpty, isEmptyWithProtos };
// Для запуска теста вводим в терминале команду: npm run test:current -- isEmpty.test.js
