## replaceItemsClear, replaceItemsMutate

Напишите две функции `replaceItemsClear(arr, item, replaceItem)` и `replaceItemsMutate(arr, item, replaceItem)`.

Функция `replaceItemsClear` находит все элементы массива `arr`, равные `item`, и возвращает новый массив, в котором на месте найденных значений стоит `replaceItem`.

Функция `replaceItemsMutate` реализует тот же функционал, только мутирует входящий массив и возвращает его же.

### Примеры использования:

```javascript
const arr = [1,2,3,4,3,2,1];
replaceItemsClear(arr, 2, 'a'); // [1,'a',3,4,3,'a',1]
console.log(arr); // [1,2,3,4,3,2,1] - исходный массив не тронут

const arr2 = [4,3,2,1,2,3,4];
replaceItemsMutate(arr2, 3, 'a');
console.log(arr2); // [4,'a',2,1,2,'a',4] - мутировали исходный массив