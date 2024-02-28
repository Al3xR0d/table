# getRepeatableData

Необходимо реализовать функцию `getRepeatableData`, которая принимает на вход три параметра:

- `getData` - функция, возвращающая данные со стороннего источника. Может генерировать ошибки.
- `key` - аргумент, с которым нужно вызвать `getData`.
- `maxRequestsNumber` - максимальное количество вызовов `getData` функции. Если этот параметр отсутствует - повторяем бесконечное количество раз.

```javascript
getRepeatableData(getData, key, maxRequestsNumber);
```

Функция `getRepeatableData` должна вызывать `getData` и обрабатывать ошибки по условию:

- Если вызов `getData` возвращает ошибку `NotFoundError`, то мы пробрасываем исключение.
- Если вызов `getData` возвращает ошибку `TemporaryError`, то мы должны делать повторный вызов `getData` функции. Количество таких вызовов не должно превышать значение `maxRequestsNumber`. Если количество повторных вызовов превышает `maxRequestsNumber`, то функция `getRepeatableData` должна пробрасывать ошибку `AttemptsLimitExceeded`.
- Если `getData` выполняется без ошибок - функция должна вернуть то, что вернула `getData`.

### Пример:

```javascript
const getData = (name) => "Hello, " + name;
const res = getRepeatableData(getData, "Ivan", 3);
console.log(res); // 'Hello, Ivan'

// Пример с перезапросом
let error = true;
const getDataWithOneError = (name) => {
    if (error) {
        error = false;
        throw new TemporaryError();
    } else {
        return "Hello, " + name;
    }
}
const res = getRepeatableData(getDataWithOneError, "Peter", 3); // getDataWithOneError вызывается дважды
console.log(res); // 'Hello, Peter'

// Пример, когда лимит попыток исчерпан
try {
    // getDataWithOneError вызывается один раз, а затем бросается исключение AttemptsLimitExceeded
    const res = getRepeatableData(getDataWithOneError, "Peter", 0);
} catch (err) {
    console.log(err instanceof AttemptsLimitExceeded); // true
}
```
