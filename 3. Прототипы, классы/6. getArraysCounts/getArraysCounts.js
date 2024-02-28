const getArraysCounts = arr => {
  // Пишите код здесь
  return arr.reduce((map, item) => {
    if (!map.has(item)) map.set(item, 0);
    return map.set(item, map.get(item) + 1);
  }, new Map());
};

const obj = { name: 123 };
const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];
const counts = getArraysCounts(data);
console.log(counts.get(1));

export { getArraysCounts };
// Для запуска теста вводим в терминале команду: npm run test:current -- getArraysCounts.test.js
