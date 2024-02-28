function partition(array, callback) {
  // Пишите код здесь
  // let trueArray = [];
  // let falseArray = [];
  // for (let i = 0; i < array.length; i++)
  //   if (callback === undefined) {
  //     if (!!array[i] === true) {
  //       trueArray.push(array[i]);
  //     } else if (!!array[i] !== true) {
  //       falseArray.push(array[i]);
  //     }
  //   } else if (!!callback(array[i]) === true) {
  //     trueArray.push(array[i]);
  //   } else if (!!callback(array[i]) !== true) {
  //     falseArray.push(array[i]);
  //   }

  // for (let i = 0; i < array.length; i++)
  //   if (callback === undefined) {
  //     if (!!array[i]) {
  //       trueArray.push(array[i]);
  //     } else {
  //       falseArray.push(array[i]);
  //     }
  //   } else if (!!callback(array[i])) {
  //     trueArray.push(array[i]);
  //   } else {
  //     falseArray.push(array[i]);
  //   }

  //FIRST
  // let trueArray = array.filter(el => (callback ? callback(el) : !!el));
  // let falseArray = array.filter(el => (callback ? !callback(el) : !el));

  // return [trueArray, falseArray];

  //ВТОРОЙ ВАРИАНТ
  let trueArray = [];
  let falseArray = [];
  array.forEach((el, i) => {
    if (callback === undefined) {
      if (!!array[i]) {
        trueArray.push(array[i]);
      } else {
        falseArray.push(array[i]);
      }
    } else if (!!callback(array[i])) {
      trueArray.push(array[i]);
    } else {
      falseArray.push(array[i]);
    }
  });
  return [trueArray, falseArray];
}

const numbers = [1, false, 2, 0, 3, ""];

console.log(partition(numbers, element => element));

export { partition };
// Для запуска теста вводим в терминале команду: npm run test:current -- partition.test.js

function getReverseSentense(sentense) {
  let words = sentense.split(" ");
  let newSentense = "";
  for (let i = words.length - 1; i >= 0; i--) {
    newSentense += words[i] + " ";
  }
  return newSentense.trimEnd();
}

console.log(getReverseSentense("Я пошел кушать"));

// console.log(getReverseSentense("Я пошел кушать"));

// function getRandomString(len) {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let result = ""
//   for (let i = 0; i < len; i++) {
//     let randomIndex = Math.floor(characters.length * Math.random());
//     result += characters[randomIndex];
//   }
//   return result
// }

// console.log(getRandomString(5));
