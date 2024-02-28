function optionalChaining(obj, chain) {
  // Пишите код здесь
  let key = chain.shift(),
    value = obj[key];
  if (chain.length == 0) return obj.hasOwnProperty(key) ? value : undefined;
  return value instanceof Object ? optionalChaining(value, chain) : undefined;
}

const obj = {
  a: {
    b: {
      c: {
        d: "Привет!",
        e: {
          f: function() {
            return "Функция";
          },
          g: [1, 2, 3]
        }
      }
    }
  }
};

console.log(optionalChaining(obj, ["a", "b", "c", "d"]));

export { optionalChaining };
// Для запуска теста вводим в терминале команду: npm run test:current -- optionalChaining.test.js

const dates = [
  { data: "2015-07-31", amount: 5000 },
  { data: "2016-12-11", amount: 5020 },
  { data: "2001-11-01", amount: 4023 },
  { data: "2012-04-30", amount: 1923 },
  { data: "2016-01-24", amount: 1283 },
  { data: "2011-06-12", amount: 4218 },
  { data: "2012-12-04", amount: 8412 },
  { data: "2002-05-26", amount: 5832 },
  { data: "2007-07-19", amount: 8123 },
  { data: "2020-09-13", amount: 1238 },
  { data: "2023-10-25", amount: 8142 }
];

// Вывести объект с отсортированными ключами (по году) и значениям
// где значение это массив строк вида '${месяц-день}'

// {
//   "2001": [
//       "11-01"
//   ],
//   "2002": [
//       "05-26"
//   ],
//   "2007": [
//       "07-19"
//   ],
//   "2011": [
//       "06-12"
//   ],
//   "2012": [
//       "04-30",
//       "12-04"
//   ],
//   "2015": [
//       "07-31"
//   ],
//   "2016": [
//       "01-24",
//       "12-11"
//   ],
//   "2020": [
//       "09-13"
//   ],
//   "2023": [
//       "10-25"
//   ]
// }

const sortDates = dates => {
  return dates.sort((a, b) => a.amount - b.amount);
};

console.log(sortDates(dates));

function sum(x) {
  const nextSum = function(y) {
    if (y === undefined) {
      return x;
    }
    return sum(x + y);
  };
  return nextSum;
}

// const sum = (n1) => {
//   return (n2) => {
//     return (n3) => {
//       return n1 + n2 + n3
//     }
//   }
// }
// console.log(sum(1)(2)(3))

console.log(sum(1)(2)(3)()); //6

const mul = x => {
  return y => {
    return z => {
      return x * y * z;
    };
  };
};

console.log(mul(1)(2)(3));

///////////////////////////////

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 384, 698, 37, 1095, 10521];

function sumEven(data) {
  return (
    data
      // .filter(function(n) {
      //   let even = n % 2 === 0;
      //   return even;
      // })
      .reduce((acc, item) => {
        if (item % 2 === 0) return acc + item;
        else return acc;
      }, 0)
  );
}

console.log(sumEven(numbers));

const products = [
  { name: "apple", category: "fruits" },
  { name: "banana", category: "fruits" },
  { name: "carrot", category: "vegetables" },
  { name: "broccoli", category: "vegetables" }
];

function getCategory(data) {
  return data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
}

console.log(getCategory(products));

const people = [
  {
    name: "Alex",
    city: "Moscow"
  },
  {
    name: "Ivan",
    city: "Moscow"
  },
  {
    name: "Joe",
    city: "New York"
  },
  {
    name: "Johan",
    city: "Berlin"
  }
];

const groupByCity = array => {
  return array.reduce((acc, item) => {
    if (!acc[item.city]) {
      acc[item.city] = [];
    }
    acc[item.city].push(item.name);
    return acc;
  }, {});
};

console.log(groupByCity(people));

const array1 = [[1, 3], [2, 6], [8, 10], [15, 18]]; // [[1, 6], [8, 10], [15, 18]]
const array2 = [[1, 4], [4, 5]];
const array3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]; // [[1, 4], [5, 10], [11, 12]]

function merge(intervals) {
  return intervals.reduce((acc, item) => {
    acc.push(...item);
    return acc;
  }, []);
}

console.log(merge(array1));
