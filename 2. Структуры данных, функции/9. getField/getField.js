const getField = (data, field) => {
  // Пишите код здесь
  if (data === undefined) {
    return [];
  } else return data.map(item => item[field]);
};

const data = [
  {
    name: "Denis",
    age: 25
  },
  {
    name: "Ivan"
  },
  {
    name: "Ann",
    age: 18
  }
];

console.log(getField(data, "age"));

export { getField };
// Для запуска теста вводим в терминале команду: npm run test:current -- getField.test.js
