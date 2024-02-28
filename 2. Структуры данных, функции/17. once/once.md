# once

Реализуйте функцию-декоратор `once`, которая не позволяет вызываться функции-аргументу больше 1 раза. 
`once` возвращает задекорированную функцию, повторный вызов которой не должен давать никакого эффекта.

Результат функции-колбека должен сохраняться для следующих вызовов обертки.

Аргументы, переданные в декоратор, должны прокидываться в функцию-колбек.

### Пример использования:

```javascript
const argFunc = () => console.log('Привет!');
const returnFunc = once(argFunc); // Возвращаем декорированную функцию
returnFunc(); // 'Привет!'
returnFunc(); // <ничего не происходит>

const argFunc2 = (param) => console.log(param);
once(argFunc2)('Пока') // 'Пока' - Аргумент передан в argFunc2

const argFunc3 = () => 'Return value';
const decoratedFunc = once(argFunc3);
console.log(decoratedFunc()); // 'Return value'
console.log(decoratedFunc()); // 'Return value' - результат сохранился
```