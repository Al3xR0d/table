# unique

Реализуйте функцию `unique`, которая принимает массив в качестве аргумента и возвращает новый массив, в котором содержатся только уникальные значения из исходного массива. 

- Исходный массив не должен изменяться.
- Порядок элементов должен сохраняться.
- Используйте `Set` для реализации этой функции.

### Пример:

```javascript
const data1 = [1, 2, 3, 3, 4, 4];
console.log(unique(data1)); // [1, 2, 3, 4]

const obj = { name: "John" };
const data2 = [obj, obj, obj, { name: "John" }];
const result = unique(data2);
console.log(result); // [{ name: 'John' }, { name: 'John' }]

console.log(result[0] === obj); // true
console.log(result[1] === obj); // false
```
