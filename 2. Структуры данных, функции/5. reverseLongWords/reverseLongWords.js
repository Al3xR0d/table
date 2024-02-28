const reverseLongWords = (str, n) => {
  // Пишите код здесь
  let words = str.split(" ");
  // for (let i = 0; i < word.length; i++) {
  //   let letters = word[i].split("");
  //   let newWord = "";
  //   if (word[i].length >= n) {
  //     for (let j = word[i].length - 1; j >= 0; j--) {
  //       newWord += letters[j];
  //       word.splice(i, 1, newWord);
  //     }
  //   }
  // }

  const reverseWord = words
    .map(el => {
      if (el.length >= n) {
        return el.split("").reverse().join("");
      }
      return el;
    })
    .join(" ");

  return reverseWord;

  // let longWord = word.filter(function(i) {
  //   return i.length >= n;
  // });

  // let reverseWords = longWord.map(item => item.split("").reverse().join(""));
  // let index = longWord.forEach(item => {
  //   word.findIndex(item);
  // });

  // let shortWord = word.filter(function(i) {
  //   return i.length < n;
  // });

  // return longWord.split("").reverse().join(" ");

  // return shortWord.concat(reverseWords).join(" ");

  // return index;

  // return (shortWord.concat(longWord.reverse())).join(" ");
};

console.log(reverseLongWords("Try to reverse me", 4));

module.exports = reverseLongWords;

// Для запуска теста вводим в терминале команду: npm run test:current -- reverseLongWords.test.js

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenOnly = nums.filter(function(n) {
  const remainder = n % 2;

  return remainder === 0;
});

console.log(evenOnly);
