# Calc

Реализовать класс `Calc` с методами `sub` / `add` / `result`.

В конструкторе можем передать начальное значение (по умолчанию 0), потом методами `add` и `sub` прибавлять и вычитать из него.
Вызов `add`/`sub` можно объединять в цепочку - методы должны возвращать новый экземпляр класса.
По вызову `result()` получаем результат вычислений.

### Пример:

```javascript
const calc = new Calc();
console.log(calc.result()); // 0
console.log(calc.add(5).result()); // 5 (= 0+5)
console.log(calc.add(3).sub(10).result()); // -7 (=0+3-10) - независимая цепочка за счет создания нового экземпляра

const ten = calc.add(10);
console.log(ten.sub(5).result()); // 5 (=10-5)
console.log(ten.result()); // 10
```
