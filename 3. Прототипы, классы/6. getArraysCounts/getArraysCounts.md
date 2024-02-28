# getArraysCounts

Реализуйте функцию `getArraysCounts`, которая принимает массив в качестве аргумента. 
Функция должна вернуть `Map`, в котором ключи - все уникальные элементы в массиве, а значения - количество этих элементов в массиве.

### Пример:

```javascript
const obj = { name: 123 };
const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];
const counts = getArraysCounts(data); // Возвращает Map

console.log(counts.get(1)); // 3
console.log(counts.get(2)); // 4
console.log(counts.get(true)); // 2
console.log(counts.get(obj)); // 2 - сравнение по ссылке
```
