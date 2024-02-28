const getMostSenior = humans => {
  // Пишите код здесь
  let ageArr = [];
  let finalArr = [];
  // humans.find(function(item, index, array) {
  //   if (item === undefined || item === null) {
  //     // return ageArr.push("not a number");
  //     humans.splice(humans[(index, 1, [])]);
  //   }
  // });
  // if (humans.some(item => item === undefined || item === null)) {
  //   item = [];
  // }
  // let indexUndef = humans.indexOf(undefined || null);
  // if (indexUndef) {
  //   humans.splice(indexUndef, 1, []);
  // }
  if (humans === undefined || humans === null) {
    return [];
  }
  humans.filter(item => item.age).map((item, index, arr) => {
    ageArr.push(item.age);
  });

  function getMaxOfArray(ageArr) {
    return Math.max.apply(null, ageArr);
  }

  ageArr.map((item, index, arr) => {
    if (item === getMaxOfArray(ageArr)) {
      finalArr.push(humans[index]);
    }
  });

  return finalArr;

  // return humans.reduce((acc, cur) => {
  //   if (acc[0] == undefined || cur > acc[0].age) return [cur];
  //   if (cur.age == acc[0].age) acc.push(cur);
  //   return acc;
  // }, []);
};

const data = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP"
  },
  {
    firstName: "Odval",
    lastName: "F.",
    country: "Mongolia",
    continent: "Asia",
    age: 38,
    language: "Python"
  },
  {
    firstName: "Emilija",
    lastName: "S.",
    country: "Lithuania",
    continent: "Europe",
    age: 19,
    language: "Python"
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 49,
    language: "PHP"
  }
];

console.log(getMostSenior(data));

export { getMostSenior };
// Для запуска теста вводим в терминале команду: npm run test:current -- getMostSenior.test.js

let numArray = [1, 2, 10, 4, 10];

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

console.log(getMaxOfArray(numArray));

////////////////////////////
const salesData = [
  { storeId: 1, year: 2023, revenue: 1000 },
  { storeId: 1, year: 2024, revenue: 1200 },
  { storeId: 2, year: 2023, revenue: 800 },
  { storeId: 2, year: 2024, revenue: 900 },
  { storeId: 3, year: 2023, revenue: 1500 },
  { storeId: 3, year: 2024, revenue: 1700 }
];

function calculateTotalRevenueByYear(data) {
  // return data.reduce((acc, item) => {
  //   if (!acc[item.year]) {
  //     acc[item.year] = item.revenue;
  //   } else acc[item.year] += item.revenue;
  //   return acc;
  // }, {});

  return data.reduce((acc, item) => {
    !acc[item.year]
      ? (acc[item.year] = item.revenue)
      : (acc[item.year] += item.revenue);
    return acc;
  }, {});
}

console.log(calculateTotalRevenueByYear(salesData));

const reviews = [
  { userId: 1, productId: 101, rating: 5, comment: "Отличный продукт!" },
  {
    userId: 1,
    productId: 102,
    rating: 3,
    comment: "Неплохо, но есть недостатки"
  },
  {
    userId: 2,
    productId: 101,
    rating: 4,
    comment: "Хороший продукт, рекомендую"
  },
  {
    userId: 1,
    rating: 4
  },
  {
    userId: 2,
    rating: 4
  },
  {
    userId: 2,
    rating: 5
  },
  {
    userId: 3,
    rating: 5
  },
  {
    userId: 4,
    rating: 4
  }
  // ... дополнительные отзывы ...
];

// Ваша задача - написать функцию analyzeReviews, которая выполняет следующие действия:

// Использует filter для выбора отзывов с оценкой 4 или 5.
// Применяет map для преобразования отфильтрованных отзывов в массив объектов, содержащих только userId и rating.
// Использует reduce для создания объекта, где ключи - это userId, а значения - это средний рейтинг, оставленный этим пользователем. Убедитесь, что средний рейтинг округляется до двух десятичных знаков.

// function analyzeReviews(arr) {
//   return arr
//     .filter(item => item.rating >= 4)
//     .map(item => ({ userId: item.userId, rating: item.rating }))
//     .reduce((acc, { userId, rating }) => {
//       !acc[userId]
//         ? (acc[userId] = rating)
//         : (acc[userId] = acc[userId] + rating);
//       return acc;
//     }, {});
// }

function analyzeReviews(arr) {
  const ratings = arr
    .filter(item => item.rating >= 4)
    .map(item => ({ userId: item.userId, rating: item.rating }))
    .reduce((acc, { userId, rating }) => {
      if (!acc[userId]) acc[userId] = { sum: 0, count: 0 };
      acc[userId].count++;
      acc[userId].sum += rating;
      return acc;
    }, {});
  for (let key in ratings) {
    ratings[key] = (ratings[key].sum / ratings[key].count).toFixed(2);
  }

  return ratings;
}

console.log(analyzeReviews(reviews));

///////////////////////////////

function getCount() {
  let count = 0;
  return function() {
    return ++count;
  };
}

let newCount = getCount();

console.log(newCount());
console.log(getCount());
console.log(newCount());
console.log(newCount());

/////////////////////

const numbers = [1, 2, 3, 4, 5];

function getMiddleOfNumbers(arr) {
  return (
    arr.reduce((acc, item) => {
      return acc + item;
    }, 0) / arr.length
  );
}

console.log(getMiddleOfNumbers(numbers));

///////////////////////

const data1 = [
  { category: "A", value: 1 },
  { category: "B", value: 2 },
  { category: "A", value: 3 },
  { category: "B", value: 4 }
];

function getGrouped(arr) {
  return arr.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
}

console.log(getGrouped(data1));

//////////////////////////////

const array1 = [[1, 3], [2, 6], [8, 10], [15, 18]]; // [[1, 6], [8, 10], [15, 18]]
// console.log(array1.length)
const array2 = [[1, 4], [4, 5]];
const array3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]; // [[1, 4], [5, 10], [11, 12]]

function merge(intervals) {
  return intervals.sort((a, b) => a[0] - b[0]).reduce((acc, item) => {
    console.log(acc);
    if (acc.length === 0) {
      acc.push(item);
    } else {
      console.log("acc2", acc);
      // console.log(acc.length);
      let interval = acc[acc.length - 1];
      console.log("interval", interval);
      console.log("item", item);
      // console.log(acc.length)
      // console.log(acc[0])
      // let length = acc.length
      // console.log("acc", acc[length]);
      if (item[0] <= interval[1]) {
        interval[1] = Math.max(interval[1], item[1]);
      } else {
        acc.push(item);
      }
    }
    return acc;
  }, []);
}

console.log(merge(array1));
// console.log(merge(array2));
// console.log(merge(array3));
