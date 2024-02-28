export const sequenceSum = (begin, end) => {
  // Пишите код здесь
  if (begin > end || typeof begin !== "number" || typeof end !== "number") {
    return NaN;
  } else {
    function getSum(begin) {
      return begin === end ? begin : begin + getSum(begin + 1);
    }
    return getSum(begin);
  }
};

console.log(sequenceSum(1, 5));

// Для запуска теста вводим в терминале команду: npm run test:current -- sequenceSum.test.js

let arr = [1, 2, 3, 4, 5];

let [one, , ...rest] = arr;

console.log(arr[0], [...rest]);

let obj = {
  one: 1,
  two: 2,
  three: 3
};

console.log({ ...obj });

const user = {
  name: "Иван",
  surname: "Иванов",
  get fullName() {
    return `${this.surname} ${this.name}`;
  }
  // set fullName(value) {
  //   [this.surname, this.name] = value;
  // }
};

user; // {name: "Иван", surname: "Иванов"}
// user.fullName = ["Петров", "Петр"];
console.log(user.fullName);
// console.log(user); // undefined
user; // {name: "Петр", surname: "Петров"}
