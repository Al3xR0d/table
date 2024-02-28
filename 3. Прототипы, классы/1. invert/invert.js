function invert(obj) {
  // Пишите код здесь
  if (Object.entries(obj).length === 0) return {};
  // let arr = Object.entries(obj).map(items => items.reverse());
  // let newObj = new Map(arr);
  // return Object.fromEntries(newObj);
  let newObj = {};
  for (let key in obj) {
    let value = obj[key];
    newObj[value] = key;
  }
  return newObj;
}

console.log(invert({ a: 1, b: 2, c: 3 }));

export { invert };
// Для запуска теста вводим в терминале команду: npm run test:current -- invert.test.js
