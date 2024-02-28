# promisesInSeries

Необходимо реализовать функцию `promisesInSeries`, которая принимает массив асинхронных функций и последовательно вызывает их, передавая в аргументы результат вызова предыдущей функции.

### Пример:

```javascript
const firstPromise = () =>
  new Promise((resolve) => setTimeout(() => resolve(300), 300));

const secondPromise = (prev) =>
  new Promise((resolve) => setTimeout(() => resolve(prev + 200), 200));

const thirdPromise = (prev) =>
  new Promise((resolve) => setTimeout(() => resolve(prev + 100), 100));

promisesInSeries(
    [firstPromise, secondPromise, thirdPromise]
).then(console.log); // 600 - поочередно-просуммированные результаты промисов
```
