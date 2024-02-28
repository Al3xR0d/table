function getStringCount(object) {
  // Пишите код здесь
  if (typeof object === "string") return 1;
  if (!object) return 0;
  return Object.values(object).reduce(
    (acc, cur) => acc + getStringCount(cur),
    0
  );
}

console.log(
  getStringCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", "else", 3, 4],
    fifth: null
  })
);

export { getStringCount };
// Для запуска теста вводим в терминале команду: npm run test:current -- getStringCount.test.js

let obj = {
  first: 1,
  second: ["один", "два"],
  third: {
    console: "log",
    hi: "all"
  },
  fight: "last"
};

let {
  first: number,
  second: [uno, dos],
  third: { console: command, hi },
  fourth = "Значания нет",
  fight
} = obj;

console.log(number);

///////////////////

let arr = [1, 2, 3];

let [one, , three] = arr;

console.log(one, three);

//////////////////////

const anyFunc = ({ age, country, isMarried, name }) => {
  console.log(name, age, isMarried, country);
};

const params = {
  name: "Sasha",
  age: 30,
  isMarried: "true",
  country: "Russia"
};
anyFunc(params);
