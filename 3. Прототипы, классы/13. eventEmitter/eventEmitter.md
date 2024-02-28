# Транслятор событий

Cоздайте класс `EventEmitter` для управления событиями. У этого класса должны быть следующие методы:

- `.on(event, callback)` - добавить обработчик события
- `.off(event, callback)` - удалить обработчик события
- `.once(event, callback)` - добавить обработчик события, который сработает единожды
- `.emit(event, [...arg])` - вызвать все обработчики события `event`, можно передать аргументы

Расширьте `EventEmitter` классом `BroadcastEventEmitter` так, чтобы была возможность вызвать все обработчики всех событий:

- `.emit("*", [...arg])` - вызвать все обработчики событий, можно передать аргументы

`Event Emitter` можно перевести как “транслятор” событий.

### Пример #1:

```javascript
let input = document.querySelector("input");
let button = document.querySelector("button");
let h1 = document.querySelector("h1");

let emitter = new EventEmitter();

emitter.on("event:name-changed", (data) => {
  h1.innerHTML = `New value is: ${data.name}`;
});

button.addEventListener("click", () => {
  emitter.emit("event:name-changed", { name: input.value });
});
```

### Пример #2:

```javascript
let emitter = new EventEmitter();

const multiplyTwo = (num) => console.log(num * 2);
const multiplyThree = (num) => console.log(num * 3);

const divideTwo = (num) => console.log(num / 2);
const divideThree = (num) => console.log(num / 3);

emitter.on("multiplication", multiplyTwo);
emitter.on("multiplication", multiplyThree);

emitter.emit("multiplication", 2);
// 4
// 6

emitter.off("multiplication", multiplyThree);

emitter.emit("multiplication", 2);
// 4

emitter.on("division", divideTwo);
emitter.once("division", divideThree);

emitter.emit("division", 6);
// 3
// 2

emitter.emit("division", 6);
// 3

emitter.emit("division", 6);
// 3

let broadcastEmitter = new BroadcastEventEmitter();

broadcastEmitter.on("multiplication", multiplyTwo);
broadcastEmitter.on("multiplication", multiplyThree);
broadcastEmitter.on("division", divideTwo);
broadcastEmitter.on("division", divideThree);

broadcastEmitter.emit("*", 6);
// 12
// 18
// 3
// 2
```