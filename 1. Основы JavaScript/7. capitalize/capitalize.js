function capitalize(str) {
  // Пишите код здесь

  let space = str.toLowerCase().split(" ");

  // let result = "";

  for (let i = 0; i < space.length; i++) {
    // let word = space[i];
    // let wordUpper = word[0].toUpperCase() + word.slice(1);
    // result += wordUpper + " ";
    // if (i == space.length - 1) {
    //   return result.trimEnd();
    // }
    space[i] = space[i][0].toUpperCase() + space[i].slice(1);
  }
  return space.join(" ");
}

console.log(capitalize("AnOthEr VErY LONg StrINg"));

module.exports = capitalize;

// Для запуска теста вводим в терминале команду: npm run test:current -- capitalize.test.js
