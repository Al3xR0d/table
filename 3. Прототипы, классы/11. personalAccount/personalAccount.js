class Person {
  // Пишите код здесь
  constructor(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(birthday);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge() {
    let ageDifMs = Date.now() - this.birthday.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

class Account {
  // Пишите код здесь
  constructor(person, amount) {
    this.person = person;
    this.amount = amount;
    this.arr = [];
  }

  addMoney(amount, description) {
    this.arr.push({ timestamp: Date.now(), target: "in", amount, description });
    this.amount += amount;
  }

  withdrawMoney(amount, description) {
    this.arr.push({
      timestamp: Date.now(),
      target: "out",
      amount,
      description
    });
    this.amount -= amount;
  }

  getAmount() {
    return this.amount;
  }

  getAccountHistory() {
    return this.arr;
  }

  static transfer(fromAccount, toAccount, amount) {
    fromAccount.withdrawMoney(amount, `перевод ${toAccount.person.fullName}`);
    toAccount.addMoney(amount, `от ${fromAccount.person.fullName}`);
  }
}

export { Person, Account };
// Для запуска теста вводим в терминале команду: npm run test:current -- personalAccount.test.js
