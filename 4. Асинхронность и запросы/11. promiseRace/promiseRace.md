# promiseRace

Реализуйте функцию `promiseRace`, которая принимает массив промисов и возвращает результат того промиса, который завершился первым. 
Если первый завершенный промис выдал ошибку - необходимо вернуть ее.

### Пример:

```javascript
const firstPromise = new Promise((resolve) =>
  setTimeout(() => resolve('Promise 300'), 300)
);

const secondPromise = new Promise((resolve) =>
  setTimeout(() => resolve('Promise 200'), 200)
);

const thirdPromise = new Promise((resolve) =>
  setTimeout(() => resolve('Promise 100'), 100)
);

promiseRace(
    [firstPromise, secondPromise, thirdPromise]
).then(console.log, console.log); // 'Promise 100'
```

### Другой пример:

```javascript
const firstPromise = new Promise((resolve) =>
  setTimeout(() => resolve('Promise 300'), 300)
);

const secondPromise = new Promise((resolve) =>
  setTimeout(() => resolve('Promise 200'), 200)
);

const thirdPromise = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error()), 100)
);

promiseRace(
    [firstPromise, secondPromise, thirdPromise]
).then(console.log, console.log); // Error
```