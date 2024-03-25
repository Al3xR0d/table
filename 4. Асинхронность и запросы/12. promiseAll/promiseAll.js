function promiseAll(promises) {
  // Пишите код здесь
  return new Promise(resolve => {
    let result = [];
    let counter = 0;
    if (promises.length === 0) {
      resolve([]);
    }
    promises.forEach((item, index) => {
      item.then(value => {
        result[index] = value;
        counter++;
        if (counter === promises.length) {
          resolve(result);
        }
      });
    });
  });
}

export { promiseAll };
// Для запуска теста вводим в терминале команду: npm run test:current -- promiseAll.test.js

function sum(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

async function func() {
  let result = await sum(2, 3);
  console.log(result);
}

func();

///////////////////

async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
}

fetchData();

////////////////////

function plusOne() {
  let start = 0;

  let nextNum = setInterval(() => {
    console.log(start);
    start++;

    if (start > 5) {
      clearInterval(nextNum);
    }
  }, 1000);
}

plusOne();

//////////////////////

function fetchData(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error("Ошибка при загрузке данных:", error);
    });
}

fetchData("https://jsonplaceholder.typicode.com/posts/1");

/////////////////

function hello() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Hello world!!!");
    }, 2000);
  });
}

hello()
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    throw new Error("Ошибка!!!");
  });

//////////////////////

function getUserInfo(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let users = {
        1: { name: "Алексей", age: 30, city: "Москва" },
        2: { name: "Екатерина", age: 25, city: "Санкт-Петербург" }
      };
      let user = users[id];
      if (user) {
        resolve(user);
      } else {
        reject("Пользователь не найден");
      }
    }, 500);
  });
}

let id = 1;

getUserInfo(id)
  .then(user =>
    console.log(`Имя: ${user.name}, возраст: ${user.age}, город: ${user.city}`)
  )
  .catch(error => {
    throw new Error("Ошибка");
  });

//////////////////////

function getRandomNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNumber = resolve(Math.floor(Math.random() * 10 + 1));
      resolve(randomNumber);
    }, 2000);
  });
}

getRandomNumber()
  .then(number => {
    console.log(number);
  })
  .catch(error => {
    throw new Error("Ошибка");
  });
////////////////////////

function getDate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let actualDate = new Date();
      resolve(actualDate);
    }, 2000);
  });
}

// async function fn() {
//   let date = await getDate();
//   console.log(date);
// }

// fn();

getDate()
  .then(date => {
    console.log(date);
  })
  .catch(error => {
    throw new Error("Ошибка");
  });
////////////////

function getMinus(a, b = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a - b);
      } else {
        throw new Error("Отсутсвуют данные");
      }
    }, 2000);
  });
}

async function func() {
  let numbers = await getMinus(5, 4);
  console.log(numbers);
}

func();

/////////////////////

function getInterval() {
  let item = 0;
  let numbers = setInterval(() => {
    if (item % 33 === 0) {
      console.log(item);
    }
    item++;
    if (item > 1000) {
      clearInterval(numbers);
    }
  }, 500);
}

console.log(getInterval());

console.log(Promise.all([]));

////////////////

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let number = Math.floor(Math.random() * 10) + 1;
      if (number < 6) {
        resolve(number);
      } else {
        reject(number);
      }
    }, 1000);
  });
}

getNum().then(num => {
  console.log(num);
});

//////////////

function firstPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 10 + 1));
    }, 1000);
  });
}

function secondPromise(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num ** 2);
    }, 3000);
  });
}

function thirdPromise(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num ** 2);
    }, 3000);
  });
}

firstPromise()
  .then(num => {
    return secondPromise(num);
  })
  .then(result => {
    console.log(result);
    return thirdPromise(result);
  })
  .then(res => {
    console.log(res);
  });

//////////////////

let order = {
  products: ["товар1", "товар2", "товар3"],
  address: "ул. Пушкина, д. Колотушкина",
  customer: "Иванов Иван"
};

let storage = {
  товар1: "в наличии",
  товар2: "в наличии",
  товар3: "в наличии"
};

function callback(result) {
  console.log(result);
}

function processOrder(order, callback) {
  let price = 0;
  setTimeout(() => {
    price = order.products.length * 100;
    setTimeout(() => {
      if (
        order.products.every(item => Object.keys(storage).indexOf(item) !== -1)
      ) {
        callback({
          message: "Заказ собран",
          price,
          address: order.address,
          customer: order.customer
        });
      } else {
        callback("Ошибка: Товара нет в наличии");
      }
    }, 2000);
  }, 2000);
}

processOrder(order, callback);
