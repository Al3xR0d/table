# partition

Необходимо реализовать функцию `partition`, которая принимает на вход массив значений и колбэк.

```javascript
partition = (array, callback) => [trueArray, falseArray]
```

Во время выполнения, функция `partition` должна вызывать `callback` для каждого элемента массива `array` и
складывать их либо в `trueArray` либо в `falseArray`.

`trueArray` - массив, содержащий те из исходных значений, для которых `callback` вернул истинное значение, в частности `true`. 
Что означает "в частности"? - `callback` может вернуть любое значение, нужно привести его к boolean типу.

`falseArray` - массив, в который попадают все остальные значения.

Если `callback` не передан, то необходимо определять истинность самих исходных значений, 
и определять в один из результирующих массивов по тем же правилам.

Функция не должна мутировать изначальный массив.

### Примеры использования:

#### Попроще

```javascript
const numbers = [1,2,3,4,5,6];

partition(numbers, (element) => element > 3); /*
[ 
	[4, 5, 6], // trueArray
	[1, 2, 3]  // falseArray
];
*/
```

```javascript
const numbers = [0, 1, 2, {}, false, "", "0"];

partition(numbers, (element) => element); /*
[ 
	[1, 2, {}, "0"], // trueArray
	[0, false, ""]  // falseArray
]
*/
```

#### Посложнее

```javascript
const users = [
    { 'user': 'barney',  'age': 36, 'active': false },
    { 'user': 'fred',    'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1,  'active': false }
];

partition(users, (element) => element.active ); /*
[ 
	[ 
		{ 'user': 'fred',    'age': 40, 'active': true } 
	], // trueArray
  [ 
		{ 'user': 'barney',  'age': 36, 'active': false },
		{ 'user': 'pebbles', 'age': 1,  'active': false } 
	] // falseArray
];
*/
```