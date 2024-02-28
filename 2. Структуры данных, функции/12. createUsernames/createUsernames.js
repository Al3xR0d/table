const createUsernames = data => {
  // Пишите код здесь
  return data.map(element => {
    const map = new Map(Object.entries(element));
    element.username =
      map.get("firstName").toLowerCase() +
      map.get("lastName")[0].toLowerCase() +
      (new Date().getFullYear() - map.get("age"));
    return element;
  });
};

const data = [
  {
    firstName: "Emily",
    lastName: "North",
    country: "Ireland",
    continent: "Europe",
    age: 30,
    language: "Ruby"
  },
  {
    firstName: "Nor",
    lastName: "East",
    country: "Malaysia",
    continent: "Asia",
    age: 20,
    language: "Clojure"
  }
];

console.log(createUsernames(data));

export { createUsernames };
// Для запуска теста вводим в терминале команду: npm run test:current -- createUsernames.test.js

const obj = {
  name: "Иван",
  age: 30
};

// console.log( Object.entries(obj) ); // [ [name, Иван], [age, 30] ]
const map = new Map(Object.entries(obj));

console.log(map.get("name"));

let now = new Date().getFullYear();
console.log(now);
