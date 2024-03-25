function promiseRace(promises) {
  // Пишите код здесь
  return new Promise((resolve, reject) => {
    promises.forEach(item => {
      item.then(resolve, reject);
    });
  });
}

export { promiseRace };
// Для запуска теста вводим в терминале команду: npm run test:current -- promiseRace.test.js
let func = e => Promise.resolve(e);
Promise.resolve(5)
  .then(e => {
    return console.log(e); // 5
  }) // undefined
  .then(func) // undefined
  .then(console.log) // undefined
  .then(e => {
    if (!e) throw "Some error";
  }) // "Some error"
  .catch(e => {
    console.log(e); // "Some error"
    return new Error(": New error");
  }) // {Error: ""}
  .then(e => {
    console.log(1 + e.message); // 1
  }) // undefined
  .catch(e => {
    console.log(2 + e.message);
  }) //
  .then();

//////////////////

function test() {
  return new Promise(res => {
    console.log("5");
    setTimeout(() => res(6), 0);
  });
}

console.log("1");

test()
  .then(v => {
    throw new Error(v);
  }) // new Error(6)
  .then(v => {
    throw new Error(v * 2);
  })
  .finally(() => console.log("2"))
  .catch(v => console.log(v));

Promise.resolve("3")
  .finally(() => {
    throw new Error("4");
  })
  .then(v => console.log(v))
  .catch(v => console.log(v));

console.log("2");

// 1, 5, 2, Error('4'), 2, Error('6')

//////////////////

console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3);
  });
});

new Promise((resolve, reject) => {
  console.log(4);
  resolve(5);
}).then(data => {
  console.log(data);

  Promise.resolve()
    .then(() => {
      console.log(6);
    })
    .then(() => {
      console.log(7);

      setTimeout(() => {
        console.log(8);
      }, 0);
    });
});

setTimeout(() => {
  console.log(9);
});

console.log(10);

// 1, 4, 10, 5, 6, 7

// 2, 3, 9, 8

///////////////////

let imageUrls = ["image1.jpg", "image2.jpg", "image3.jpg"];

function getImages(item) {
  let promises = [];

  for (let url of imageUrls) {
    let promise = new Promise((resolve, reject) => {
      let img = new Image();
      img.load = () => resolve(url);
      img.error = () => reject(new Error(`Ошибка загрузки файла ${url}`));
      img.src = url;

      promises.push(promise);
    });
  }
  return Promise.all(promises);
}

getImages(imageUrls)
  .then(urls => {
    console.log("Все изображения загружены", urls);
  })
  .catch(err => {
    console.log(err);
  });

/////////////////////

function delayedPromise(milisec) {
  return new Promise((resolve, reject) => {
    if (milisec < 0) {
      reject(new Error("Время должно быть положительным числом"));
    } else if (milisec !== 3000) {
      reject(new Error("Время должно быть равно 3 сек"));
    } else {
      setTimeout(() => {
        resolve();
      }, 3000);
    }
  });
}

delayedPromise(3000)
  .then(() => {
    console.log("Сработало через 3 секунды");
  })
  .catch(error => {
    console.error("Произошла ошибка:", error);
  });

///////////////

function fetchAndProcessData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Ошибка получения данных с сервера");
        }
        return response.json();
      })
      .then(data => {
        let processData = processData(data);
        resolve(processData);
      })
      .catch(err => reject(err));
  });
}

fetchAndProcessData("https://api.example.com/data")
  .then(processedData => {
    console.log("Обработанные данные:", processedData);
  })
  .catch(error => {
    console.error("Произошла ошибка при получении и обработке данных:", error);
  });

//////////////////////

function delayedPromise(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error("Количество милисекунд должно быть большу нуля"));
    } else {
      setTimeout(() => {
        resolve();
      }, ms);
    }
  });
}

delayedPromise(2000).then(() => {
  console.log("Прошло 2 секунды!");
});

/////////////////

function multiply(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") {
      reject(new Error("Введите число"));
    } else {
      setTimeout(() => {
        resolve(num * 2);
      }, 1000);
    }
  });
}

multiply(7)
  .then(num => {
    console.log(num);
  })
  .catch(err => {
    console.error(err);
  });

///////////////////////

function getSquare(num) {
  return new Promise((resolve, reject) => {
    if (typeof num === "number") {
      setTimeout(() => {
        resolve(num ** 2);
      }, 3000);
    } else {
      reject(new Error("Введите число"));
    }
  });
}

getSquare(5).then(num => console.log(num)).catch(err => console.log(err));

///////////////////////

function getSumOfArr(arr) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(arr) === true) {
      setTimeout(() => {
        resolve(
          arr.reduce((acc, item) => {
            acc = acc + item;
            return acc;
          }, 0)
        );
      }, 3000);
    } else {
      reject(new Error("Введите массив"));
    }
  });
}

getSumOfArr([1, 2, 3, 4, 5])
  .then(item => console.log(item))
  .catch(err => console.log(err));

//////////////////////////

function getEven(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") {
      reject(new Error("Введите число"));
    } else {
      setTimeout(() => {
        if (num % 2 === 0) {
          resolve(`Число ${num} четное`);
        } else {
          resolve(`Число ${num} нечетное`);
        }
      }, 3000);
    }
  });
}

getEven(6).then(num => console.log(num)).catch(err => console.log(err));

///////////////////////

function getSimple(num) {
  return new Promise((resolve, reject) => {
    if (num <= 1 || !Number.isInteger(num) || typeof num !== "number") {
      reject(new Error("Введено неверное значение"));
    } else {
      setTimeout(() => {
        for (let i = 2; i <= num; i++) {
          if (num % i === 0) {
            resolve(`Число ${num} не является простым`);
          } else {
            resolve(`Число ${num} простое`);
          }
        }
      }, 5000);
    }
  });
}

getSimple(10).then(num => console.log(num)).catch(err => console.log(err));

///////////////////////

const products = [
  { name: "Шорты", price: 25 },
  { name: "Футболка", price: 15 },
  { name: "Носки", price: 5 }
];
// console.log(products.map(item => item.price));
function getPrice(value) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(value)) {
      reject(new Error("Неправильные исходные данные"));
    } else {
      setTimeout(() => {
        let arr = [];
        for (let item of value) {
          arr.push(item.price);
        }
        resolve(
          arr.reduce((acc, item) => {
            acc = acc + item;
            return acc;
          }, 0)
        );
      }, 2000);
    }
  });
}

getPrice(products)
  .then(item => console.log(item))
  .catch(err => console.log(err));

//////////////////////////////

class PromisePool {
  // WRITE CODE HERE
  constructor({ limit }) {
    this.limit = limit;
    this.queue = new Queue();
    this.count = 0;
  }

  run(arrowFn) {
    return new Promise((resolve, reject) => {
      let nextQueue = () => {
        this.count++;
        arrowFn()
        .then(resolve)
        .catch(reject)
          .finally(() => {
            this.count--;
            if (!this.queue.isEmpty()) {
              this.queue.take()();
            }
          });
      };

      if (this.count < this.limit) {
        nextQueue();
      } else {
        this.queue.add(nextQueue);
      }
    });
  }
}

class Queue {
  constructor() {
    this.items = [];
    // this.arg = Array.from(arg)
  }

  add(item) {
    this.items.push(item);
  }

  take() {
    return this.items.shift();
  }

  #getSize() {
    return this.items.length;
  }

  isEmpty() {
    return this.#getSize() === 0;
  }
}

const pool = new PromisePool({ limit: 3 });

for (let i = 0; i < 100; i++) {
  pool
    .run(() => {
      return makeRequest();
    })
    .then(
      res => console.log("Success 1: ", res),
      err => console.log("Error 1: ", err)
    );
}

function makeRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const r = Math.random();
      if (r > 0.7) reject(r);
      resolve(r);
    }, Math.random() * 1000);
  });
}


