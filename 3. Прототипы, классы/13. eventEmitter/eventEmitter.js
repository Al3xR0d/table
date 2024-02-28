class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  off(eventName, callback) {
    let index = this.events[eventName].indexOf(callback);
    if (index > -1) {
      this.events[eventName].splice(index, 1);
    }
  }

  once(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    let once = () => {
      callback();
      this.off(eventName, once);
    };
    this.events[eventName].push(once);
  }

  emit(eventName, ...args) {
    this.events[eventName].forEach(item => {
      item.apply(null, args);
    });
  }
}

class BroadcastEventEmitter extends EventEmitter {
  emit(eventName, ...args) {
    eventName = Object.keys(this.events);
    eventName.forEach(item => super.emit(item, ...args));
  }
}

export { BroadcastEventEmitter, EventEmitter };
// Для запуска теста вводим в терминале команду: npm run test:current -- EventEmitter.test.js

// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.sound = function() {
//   return "Животное издает звук";
// };

// function Dog() {}
// Dog.proyotype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.sound = function() {
//   return "Собака лает";
// };

// function Cat() {}
// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;
// Cat.prototype.sound = function() {
//   return "Кошка мяукает";
// };

// let cat = new Cat("Мила");
// let animal = new Animal("Z");

// console.log(cat);

/////////////////////////////////////////

class Animal {
  constructor(name) {
    this.name = name;
  }
  sound() {
    return "Животное издает звук";
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  sound() {
    return "Собака лает";
  }
}

let sharik = new Dog("Sharik", 3);

console.log(sharik.sound());

//////////////////////////////////////////

Array.prototype.shuffle = function() {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  }
  return this;
};

let arr = [1, 2, 3, 4, 5, 7, 11];
console.log(arr.shuffle());

////////////////////////////////////////

class Vehicle {
  constructor(model, speed, age) {
    this.model = model;
    this.speed = speed;
    this.age = age;
  }
  honk() {
    console.log("Beeeeep");
  }
}

class Car extends Vehicle {}

let kia = new Car("Kia", "120km/h", 7);

kia.honk();

///////////////////////////

let vehicle = {
  type: "transport",
  wheels: 4,
  honk: function() {
    console.log("Beeeeep");
  }
};

let car = Object.create(vehicle);
car.model = "Kia";
car.age = 7;

car.honk();
console.log(car.model);

////////////////////////////

function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log(`Привет, ${this.name}!`);
};

function Student(name) {
  this.name = name;
}
Student.prototype = new Person();
Student.prototype.study = function() {
  console.log(`${this.name} учится`);
};

let myStudent = new Student("Саша");

myStudent.greet();
myStudent.study();

//////////////////////

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    for (let book of this.books) {
      if (type === "тип" && book.type === value) {
        return book;
      } else if (type === "автор" && book.author === value) {
        return book;
      } else if (type === "имя" && book.name === value) {
        return book;
      } else if (type === "год" && book.year === value) {
        return book;
      }
      return null;
    }
  }
  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        const removedBook = this.books[i];
        this.books.splice(i, 1);
        return removedBook;
      }
    }
    return null;
  }
}

//////////////////////

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(newState) {
    if (state < 0) {
      this.state = 0;
    } else if (state > 100) {
      this.state = 100;
    } else {
      this.state = state;
    }
  }

  get state() {
    return this.state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "detective";
  }
}

////////////////////

class Calculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  addition() {
    console.log(this.x + this.y);
  }

  substraction() {
    console.log(this.x - this.y);
  }

  multiplication() {
    console.log(this.x * this.y);
  }

  division() {
    if (this.y === 0) {
      console.log("y не может быть равно 0");
    } else console.log(this.x / this.y);
  }
}

let numbers = new Calculator(0, 30);

numbers.addition();
numbers.substraction();
numbers.multiplication();
numbers.division();

/////////////////////

class Library {
  constructor() {
    this.books = [];
  }

  add(book) {
    this.books.push(book);
  }

  delete(bookName) {
    this.books = this.books.filter(item => item !== bookName);
  }

  find(book) {
    if (this.books.includes(book)) {
      console.log("Yes");
    } else console.log("No");
  }

  all() {
    console.log(this.books.join(", "));
  }
}

let library = new Library();

library.add("book1");
library.add("book2");
library.add("book3");

library.delete("book2");

library.find("book2");
library.find("book3");

library.all();

////////////////////

class BankAmount {
  constructor(amount) {
    this.amount = amount;
    this.transitions = [];
  }

  result() {
    console.log(this.amount);
  }

  plus(money) {
    this.amount += money;
    this.transitions.push(`пополнение на ${money}`);
  }

  minus(money) {
    if (this.amount - money < 0) {
      console.log("Нет достаточных средств");
      this.transitions.push(`Попытка снятия на ${money}`);
    } else if (this.amount - money > 0) {
      this.amount -= money;
      this.transitions.push(`снятие на ${money}`);
    }
  }

  history() {
    console.log(this.transitions.join(", "));
  }
}

let deposit = new BankAmount(1000);
deposit.plus(100);
deposit.plus(50);
deposit.minus(300);
deposit.minus(1000);
deposit.result();
deposit.history();
