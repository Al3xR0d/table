# promiseAll

Напишите асинхронную функцию, которая принимает массив промисов и возвращает массив результатов этих промисов.
Если один из промисов выдал ошибку - функция `promiseAll` завершается с этой ошибкой.

Порядок переданных промисов должен сохраняться в результатах.

### Пример:

```javascript
const firstPromise = new Promise((resolve) =>
  setTimeout(() => resolve(300), 300)
);

const secondPromise = new Promise((resolve) =>
  setTimeout(() => resolve(200), 200)
);

const thirdPromise = new Promise((resolve) =>
  setTimeout(() => resolve(100), 100)
);

promiseAll(
    [firstPromise, secondPromise, thirdPromise]
).then(console.log, console.log); // [300, 200, 100]
```

### Другой пример:

```javascript
const firstPromise = new Promise((resolve) =>
    setTimeout(() => resolve(200), 200)
);

const secondPromise = new Promise((resolve) =>
    setTimeout(() => resolve(100), 100)
);

const thirdPromise = new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error()), 300)
);

promiseAll(
    [firstPromise, secondPromise, thirdPromise]
).then(console.log, console.log); // Error
```
