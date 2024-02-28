# Личный cчет

Создайте 2 класса - `Person` для описания клиента и `Account` для работы с банковским счетом частного лица.
Считаем, что отрицательный баланс счета - это нормально, обрабатывать как ошибку не надо.

### Person

```javascript
const person = new Person("Johannes", "Helms", "1983-01-02");
```

#### Методы

- `getAge()` - возвращает возраст владельца счета

#### Свойства

- `firstName` - имя
- `lastName` - фамилия
- `fullName` - геттер, возвращающий имя вместе с фамилией

### Account

```javascript
new Account(person, 1000);
```

#### Методы

- `addMoney(amount, description)` - положить деньги на аккаунт с комментарием к переводу
- `withdrawMoney(amount, description)` - вывести деньги с аккаунта с комментарием к переводу
- `getAmount()` - получить текущее состояние счета
- `getAccountHistory()` - возвращает массив с объектами формата `{ timestamp: 1574434091131, target: 'in', amount: 10, description: 'ЗП' }`. Поле `target` может иметь значения `in` или `out`.
- `transfer(fromAccount, toAccount, amount)` - статический метод, переводит деньги с одного счета на другой

#### Свойства

- `person` - Владелец счета

### Пример:

```javascript
const alex = new Person("Alexey", "Petrov", "1994-05-22");
const alexAccount = new Account(alex, 1000);
const helen = new Person("Helen", "Smith", "1990-06-06");
const helenAccount = new Account(helen, 400);

alexAccount.addMoney(1000, "Зарплата");
const amount = alexAccount.getAmount();
console.log(amount); // 2000
alexAccount.withdrawMoney(amount * 0.1, "Налоги");
console.log(alexAccount.getAmount()); // 1800

Account.transfer(alexAccount, helenAccount, 100);
console.log(helenAccount.getAmount()); // 500
console.log(alexAccount.getAmount()); // 1700
console.log(alexAccount.getAccountHistory()); /*
[
  { timestamp: .., target: 'in', amount: 1000, description: 'Зарплата' },
  { timestamp: .., target: 'out', amount: 200, description: 'Налоги' },
  { timestamp: .., target: 'out', amount: 100 },
]
*/
```

Конечно, обычно математику с плавающей точкой для обработки балансов стоит учитывать - будут накапливаться ошибки вычисления. 
Но в данном упражнении этим можно пренебречь.
