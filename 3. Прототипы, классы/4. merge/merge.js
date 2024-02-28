const merge = (...objs) => {
  // Пишите код здесь
  let newArr = objs.filter(function(item) {
    return typeof item === "object";
  });
  if (newArr.length === 0) return {};
  // return newArr.reduce(function(result, user) {
  //   return {
  //     ...result,
  //     ...user
  //   };
  // }, {});
  return newArr.reduce((acc, item) => {
    return (acc = Object.assign(acc, item));
  }, {});
};

console.log(
  merge(
    {
      name: "John",
      age: 22
    },
    {
      surname: "Klein",
      age: 20,
      profession: "student"
    },
    {
      profession: "frontend developer",
      country: "USA"
    },
    "X"
  )
);

const user = { a: 3, b: 2 };
console.log();

export { merge };
// Для запуска теста вводим в терминале команду: npm run test:current -- merge.test.js
