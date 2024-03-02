import { getUsersIds, getUserInfo } from "./db";

function getUsersInfo(callback) {
  // Пишите код здесь
  getUsersIds(item => {
    const users = [];
    let count = 0;
    item.forEach((value, index) => {
      getUserInfo(value, userInfo => {
        users[index] = userInfo;
        count++;
        if (count === item.length) {
          callback(users);
        }
      });
    });
  });
}

export { getUsersInfo };
// Для запуска теста вводим в терминале команду: npm run test:current -- getUsersInfo.test.js

// console.log(getUserInfo);

const usersData = {
  id1: { name: "Alex", age: 70 },
  id2: { name: "Elon" }
};

console.log(Object.keys(usersData)); //getUsersIds
console.log(usersData.id1); //getUserInfo
