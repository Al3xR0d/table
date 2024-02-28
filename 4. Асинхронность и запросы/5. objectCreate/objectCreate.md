# objectCreate

В данном задании вам нужно будет реализовать полифилл `Object.create`.

Реализуйте аналог стандартной функции `Object.create`, которая создаёт и возвращает новый объект, прототипом которого является первый аргумент, переданный в функцию. 
Если передан второй аргумент - копируем его свойства в новый объект. См. [Object.create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

Ваша функция должна принимать два параметра:

1. `prototype` (обязательный) - объект или `null` (но не `undefined`), который будет являться прототипом для созданного объекта.
2. `properties` (необязательный) - объект с парами ключ-значение, где значениями являются объекты дескрипторов для этого ключа. Все перечисленные ключи будут скопированы в новосозданный объект. См. пример ниже.

Если параметры функции отсутствуют или `prototype` НЕ является объектом или `null`, то необходимо пробросить `TypeError`.

В результате `Object.create` вернет созданный объект с внутренним свойством `[[Prototype]]`, установленным в значение переданного в аргументе `prototype`. Если `properties` передан и НЕ является `undefined`, то будет вызван `Object.defineProperties(obj, properties)`, где `obj` - объект, который будет возвращен из `Object.create`.

### Подсказки:

- Для доступа к внутреннему свойству объекта `[[Prototype]]` используйте методы `Object.getPrototypeOf`/`Object.setPrototypeOf`.
- В JavaScript все является объектом, кроме: `null` и `undefined`.
- `NaN`, `Infinity`, `/regular expression literals/`, `function(){}` - это всё тоже объекты.

### Пример:

```javascript
const a = {
  name: "Object A",
  getName: function () {
    return `This is ${this.name}!`;
  },
};

const b = Object.create(a, {
  name: {
    value: "Object B",
    writable: true,
    enumerable: false,
  },
});

a.getName(); // This is Object A! (достали метод из объекта)
b.getName(); // This is Object B! (достали метод из прототипа)

b.hasOwnProperty("name"); // true
a.hasOwnProperty("getName"); // true

b.hasOwnProperty("name"); // true
b.hasOwnProperty("getName"); // false
Object.getPrototypeOf(b).hasOwnProperty("getName"); // true
```
