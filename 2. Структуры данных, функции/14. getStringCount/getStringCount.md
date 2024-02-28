# getStringCount

Реализуйте (с использованием рекурсии) функцию `getStringCount`, которая должна принимать массив или объект и считать количество строк в массиве / значениях объекта с учетом вложенности.

### Примеры использования:

```javascript
getStringCount(['1', '2', ['3']]); // 3

getStringCount({
  first: '1',
  second: '2',
  third: false,
  fourth: ['anytime', 'else', 3, 4],
  fifth: null,
}); // 4