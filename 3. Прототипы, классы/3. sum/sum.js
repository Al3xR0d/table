const sum = (...nums) => {
  // Пишите код здесь
  if (nums.length === 0) return 0;
  else {
    // let newNums = nums.map(item => +item).filter(item => !!item);
    // return newNums.reduce((sum, item) => {
    //   return sum + item;
    // }, 0);
    return nums.filter(item => +item).reduce((acc, item) => {
      item = +item;
      return acc + item;
    }, 0);
  }
};

console.log(sum(1, 2, 3, 4, 5, "6", "a", true));

export { sum };
// Для запуска теста вводим в терминале команду: npm run test:current -- sum.test.js

// function sumDigits(num) {
//   num = Math.abs(num);
//   if (num < 10) {
//     return num;
//   }

//   return num % 10 + sumDigits((num - num % 10) / 10);
// }

// console.log(sumDigits(-123));

function isUnic(array) {
  let sortedArr = array.sort((a, b) => a - b);
  //  console.log(sortedArr)
  for (let index = 0; index < sortedArr.length; index++) {
    //// Объкт
    if (sortedArr[index] === sortedArr[index + 1]) {
      return false;
    }
  }
  return true;
}

////////

let arr = [4, 2, 3, 3, 3, 1];

function isUnic(array) {
  // let newArr = new Set();
  // array.map(item => newArr.add(item));
  // if (newArr.size === array.length) return true;
  // return false;
  // console.log(...new Set(array));
  // return [...new Set(array)].length === array.length;
  let obj = {};
  let falseObj = true;
  array.forEach(item => {
    if (!obj[item]) {
      obj[item] = true;
    } else if (obj[item]) {
      // return falseObj[item] = false
      falseObj = false;
    }
  });
  // if ()
  // console.log(falseObj)
  return falseObj;
}

console.log(isUnic(arr));

/////////

const sentence = "Хочу найти работу мечты";

const reverseSentence = sentence => {
  return sentence
    .split(" ")
    .map(item => item.split("").reverse().join(""))
    .join(" ");
};

console.log(reverseSentence(sentence));

/////////

const arr1 = [1, 3, 5, 7, 9, 8, 6, 4, 2, 10];
const arr2 = [9, 1, 8, 2, 7, 3, 10, 5, 4];

const findMissing = (nums1, nums2) => {
  // let index = arr1.map(item => arr2.includes(item)).indexOf(false);
  // return arr1[index];
  return nums1.filter(item => !nums2.includes(item)).join("");
};

console.log(findMissing(arr1, arr2));
