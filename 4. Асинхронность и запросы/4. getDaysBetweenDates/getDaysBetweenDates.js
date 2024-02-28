function getDaysBetweenDates(a, b) {
  // Пишите код здесь
  if (typeof a === "string" && typeof b === "string") {
    return Math.round((new Date(b) - new Date(a)) / 86400000);
  } else if (typeof a == "undefined" || typeof b == "undefined") {
    throw new TypeError();
  } else if (typeof a === "number" && typeof b === "number") {
    return Math.floor((b - a) / 86400000);
  } else {
    return Math.round((b - a) / 86400000);
  }
}

// class TypeError extends Error {
//   constructor() {
//     super("TypeError");
//     this.name = "TypeError";
//   }
// }

export { getDaysBetweenDates };
// Для запуска теста вводим в терминале команду: npm run test:current -- getDaysBetweenDates.test.js

// console.log(getDaysBetweenDates("1-1-2020"));

let date1 = new Date(2011, 6, 2, 6, 0);
let date2 = new Date(2012, 6, 2, 18, 0);
let date7 = new Date(null);

console.log(Math.floor(Math.abs((date1 - date2) / 86400000)));

let date3 = "1-1-2020";
let date4 = "1-2-2020";

let date3Arr = date3.split("-");
// let new1 = new Date(2011, 0, 2);
// console.log(new1);

let newDate = new Date(date3Arr[2], date3Arr[1], date3Arr[0] + 1);
// console.log(date3Arr[0]);
console.log(newDate);

console.log(Math.abs((new Date(date3) - new Date(date4)) / 86400000));

let date5 = 1409796000000;
let date6 = 1409925600000;

console.log(Math.floor(Math.abs((date5 - date6) / 86400000)));

const dateA = new Date(2023, 0, 2); // Допустим, 2 января 2023 года

console.log(dateA);

console.log(new Date(2011, 1, 3));
