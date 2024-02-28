const filterByParity = (numbers, parity) => {
  // Пишите код здесь
  // let newNumbers = [];
  // for (let i = 0; i < numbers.length; i++) {
  //   let remains = numbers[i] % 2;
  //   if (parity == "odd" && remains !== 0) {
  //     newNumbers.push(numbers[i]);
  //   } else if (parity == "even" && remains === 0) {
  //     newNumbers.push(numbers[i]);
  //   }
  // }
  // return newNumbers;
  if (parity === "odd") {
    return numbers.filter(a => a % 2 !== 0);
  } else return numbers.filter(a => a % 2 === 0);
};

const data = [1, 2, 3, 4, 5, 6];
console.log(filterByParity(data, "odd"));

export { filterByParity };
// Для запуска теста вводим в терминале команду: npm run test:current -- filterByParity.test.js

// function changeSpace(sentence, symbol) {
//   return sentence.split(" ").join(symbol);
// }

// console.log(changeSpace("Z nnn LL OO", "-"));
