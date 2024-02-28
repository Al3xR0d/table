# optionalChaining

Необходимо реализовать функцию, которая принимает объект в качестве первого параметра и массив из цепочки свойств в качестве второго параметра. 
Функция идет по цепочке свойств объекта для получения значения. Если свойство в цепочке отсутствует, возвращается `undefined`.

### Примеры использования:

```javascript
const obj = {
  a: {
    b: {
      c: {
        d: 'Привет!'
      }
    }
  }
}

optionalChaining(obj, ["a", "b", "c", "d"]); // 'Привет!'
optionalChaining(obj, ["a", "b", "c", "d", "e"]); // undefined
optionalChaining(obj, ["a", "c", "d"]); // undefined
optionalChaining(obj, ["b", "d", "a"]); // undefined
```