# getDaysBetweenDates

Реализуйте функцию `getDaysBetweenDates` которая принимает на вход две даты и возвращает количество полных дней между ними.

```javascript
console.log(getDaysBetweenDates("1-1-2020", "1-2-2020")); // 1
```

Функция должна корректно работать с объектом `Date`

```javascript
console.log(
    getDaysBetweenDates(
        new Date(2011, 6, 2, 6, 0), 
        new Date(2012, 6, 2, 18, 0)
    )
); // 366
```

Функция должна корректно работать со значениями в миллисекундах

```javascript
console.log(
    getDaysBetweenDates(1409796000000, 1409925600000)
); // 1
```

Если входные параметры - невалидные даты, то функция возвращает `NaN`:

```javascript
console.log(getDaysBetweenDates("1-1-2020", "дата")); // NaN
```

Если аргументов меньше 2-х, то функция должна пробросить исключение `TypeError`

```javascript
console.log(getDaysBetweenDates(null)); // TypeError
```

`new Date(null)` - валидная запись, которая вернёт количество миллисекунд, прошедшее с 01.01.1970. См. [Unix time](https://en.wikipedia.org/wiki/Unix_time)
