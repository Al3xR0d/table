class Addition {
  constructor(num) {
    this.num = num;
  }

  add(...nums) {
    const sum = (a, b) => a + b;
    return this.num + nums.reduce(sum);
  }
}

// Пишите код здесь

// let addition = new Addition(5);
// console.log(addition.add(1, 2, 3));

let addWithLog = Addition.prototype.add;

Addition.prototype.add = function(...nums) {
  console.log("called");
  return addWithLog.call(this, ...nums);
};

const startedValue = new Addition(5);
const result = startedValue.add(3, 5, 6);

console.log(result);

// var newAddition = new Addition(2);
// console.log(b.add(1, 2, 3))
// console.log(a.add(1, 2, 3))

export { Addition };
// Для запуска теста вводим в терминале команду: npm run test:current -- prototypesDecorator.test.js
