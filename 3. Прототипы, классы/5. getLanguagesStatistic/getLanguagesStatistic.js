const getLanguagesStatistic = data => {
  // Пишите код здесь
  // let filterArr = data.filter(function(item) {
  //   return item.year === 2023;
  // });
  // let languageArr = filterArr.map(item => item.language);
  // let obj = {};
  // for (let item of languageArr) {
  //   obj[item] = obj[item] ? obj[item] + 1 : 1;
  // }
  // return obj;
  return data.filter(item => item.year === 2023).reduce((acc, item) => {
    acc[item.language] = acc[item.language] ? acc[item.language] + 1 : 1;
    return acc;
  }, {});
};

const data = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    year: 2023
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
    year: 2023
  },
  {
    firstName: "Piter",
    lastName: "G.",
    country: "Sweden",
    continent: "Europe",
    age: 30,
    language: "JavaScript",
    year: 2023
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
    year: 2014
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
    year: 2016
  }
];

console.log(getLanguagesStatistic(data));

export { getLanguagesStatistic };
// Для запуска теста вводим в терминале команду: npm run test:current -- getLanguagesStatistic.test.js
