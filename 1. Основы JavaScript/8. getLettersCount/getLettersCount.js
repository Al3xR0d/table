function getLettersCount(str) {
  // Пишите код здесь
  if (!!str == false) {
    return {};
  } else {
    let letters = str.toLowerCase().match(/[a-z]/g);
    let countLetters = {};

    for (let number of letters) {
      countLetters[number] = countLetters[number]
        ? countLetters[number] + 1
        : 1;
    }

    return countLetters;
  }
}

console.log(getLettersCount("NaN"));

export { getLettersCount };
// Для запуска теста вводим в терминале команду: npm run test:current -- getLettersCount.test.js
