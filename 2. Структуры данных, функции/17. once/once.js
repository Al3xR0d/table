const once = fn => {
  // Пишите код здесь
  let called = false;
  let result;
  // let error;

  return function(...args) {
    // console.log(args);
    if (!called) {
      try {
        result = fn(...args);
      } catch (error) {
        throw error;
        // error = e;
      } finally {
        called = true;
      }
    }
    return result;
  };
};

const errorFn = () => {
  throw new Error("Error in function");
};
const argFunc = () => console.log("Привет!");
const returnFunc = once(argFunc);

console.log(returnFunc());

export { once };
// Для запуска теста вводим в терминале команду: npm run test:current -- once.test.js

// function slow(param) {
//   console.log("Совершаю подсчет");
//   // ... долгие вычисления
//   return param * 2;
// }

// function cachingDecorator(func) {
//   const cache = new Map(); // (2)

//   return function(param) {
//     // (3)
//     if (cache.has(param)) {
//       // (4)
//       return cache.get(param);
//     }

//     let result = func(param); // (5)

//     cache.set(param, result);
//     return result;
//   };
// }

// slow = cachingDecorator(slow);

// console.log( slow(1) ); // slow(1) кешируем
// console.log( "Еще раз: " + slow(1) )

console.log("я учу JS");

////////////////////////////////////

const arr1 = [1, 3, 5, 7, 9, 8, 6, 4, 2, 10];
const arr2 = [9, 1, 8, 2, 7, 3, 10, 5, 4];

function isUnic(arr1, arr2) {
  const obj1 = arr1.reduce((acc, n) => {
    acc[n] = (acc[n] || 0) + 1;
    return acc;
  }, {});

  const obj2 = arr2.reduce((acc, n) => {
    acc[n] = (acc[n] || 0) + 1;
    return acc;
  }, {});

  let answer = {};

  Object.entries(obj1).forEach(entry => {
    let [key, value] = entry;
    if (obj1[key] == obj2[key]) {
      return obj1[value] - obj2[value];
    }
    answer[key] = value;
  });

  return answer;
}

console.log(isUnic(arr1, arr2));

///////////////////////////////////

let arr = ["apple", "banana", "apple", "orange", "apple", "banana"];

function getNumsOfWords(data) {
  return data.reduce((acc, item) => {
    if (item in acc) {
      acc[item]++;
    } else acc[item] = 1;
    return acc;
  }, {});
}

console.log(getNumsOfWords(arr));

const persons = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 }
];

function getAgeList(data) {
  return data.reduce((acc, item) => {
    if (!acc[item.age]) acc[item.age] = [];
    acc[item.age].push(item);
    return acc;
  }, {});
}

console.log(getAgeList(persons));

function accumulator() {
  let sum = 10;
  return function(value) {
    sum += value;
    return sum;
  };
}

const add = accumulator();

console.log(add(3));

function getValue(value) {
  return {
    minus: function() {
      value--;
    },
    plus: function() {
      value++;
    },
    value: function() {
      return value;
    }
  };
}

const count = getValue(5);
count.plus();
count.plus();

console.log(count.value());

function multiply(x) {
  return function(y) {
    return x * y;
  };
}

let multiplyByTwo = multiply(2);

console.log(multiplyByTwo(7));
