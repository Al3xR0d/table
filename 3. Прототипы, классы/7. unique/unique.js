const unique = arr => {
  // Пишите код здесь
  // let newArr = new Set();
  // arr.map(item => newArr.add(item));
  // return [...newArr];
  return Array.from(new Set(arr));
  // return Array.from(newArr);
};

const data1 = [1, 2, 3, 3, 4, 4];
console.log(unique(data1));

export { unique };
// Для запуска теста вводим в терминале команду: npm run test:current -- unique.test.js

class Samurai {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(this.name);
  }
}

let shogun = new Samurai("Sasha");

console.log(shogun.__proto__.constructor.__proto__);
