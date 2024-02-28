# applyFn

Необходимо реализовать функцию `applyFn`, которая принимает на вход 2 параметра `applyFn(dataArr, callback)`:

1. `dataArr` - массив с входными данными
2. `callback` - функция, которую нужно применить к каждому элементу массива входных данных 

Функция должна возвращать объект, в котором 2 массива: массив результатов `succeeded` и массив ошибок `errors` с правильными call stacks.

```javascript
{
  succeeded: [...], // Массив данных после функции обработчика, как при вызове .map
  errors: [...],    // Массив инстансов ExecutionError
}
```

Также необходимо создать класс ошибки `ExecutionError` с методом `.getArgData()`, который возвращает аргумент, с вызовом которого упала функция-колбэк, 
то есть возвращать `element` входного массива `dataArr`, если вызов `callback(element)` сгенерирует ошибку.

Стек трейс должен указывать на корректную позицию в функции-коллбэке.

### Пример:

```javascript
const { succeeded, errors } = applyFn([1, 2, 3], (arg) => arg + 1);
console.log(succeeded); // [2, 3, 4]
console.log(errors); // []

const dataArr = ['{"login":"login","password":"password"}', "{{}"];
const callback = JSON.parse;
const { succeeded, errors } = applyFn(dataArr, callback);
console.log(succeeded); // [{ login: 'login', password: "password" }],
console.log(errors); // [ExecutionError],
console.log(errors[0].getArgData()); // '{{}'
```
