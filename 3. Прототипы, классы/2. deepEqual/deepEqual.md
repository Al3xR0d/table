# deepEqual

Реализуйте функцию `deepEqual`, которая проверяет на равенство два значения, объекта или массива, учитывая их вложенность.

Два объекта считаются равными, если у них все свойства одинаковы. В случае, если одно из свойств - объект, мы сравниваем на равенство эти объекты по тому же алгоритму.

### Пример:

```javascript
const firstObject = {
  a: {
    b: {
      c: 1,
      d: "string",
      e: {
        num: 1,
      },
    },
  },
};

const secondObject = {
  a: {
    b: {
      e: {
        num: 1,
      },
      d: "string",
      c: 1,
    },
  },
};

console.log(deepEqual(firstObject, secondObject)); // true
console.log(deepEqual({ a: 1, b: 3 }, { b: 2, a: 1 })); // false
console.log(deepEqual(1, 2)); // false
console.log(deepEqual(true, false)); // false
```
