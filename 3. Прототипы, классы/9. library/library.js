function Book(name, author, year) {
  // Пишите код здесь
  this.name = name;
  this.author = author;
  this.year = year;
  this.reader = null;
}

Book.prototype.isAvailable = function() {
  return !this.reader;
};

Book.prototype.takeBook = function(readerName) {
  if (this.reader) return false;
  else {
    this.reader = readerName;
    return true;
  }
};

Book.prototype.returnBook = function() {
  if (this.reader) {
    this.reader = null;
    return true;
  }
  return false;
};

Book.prototype.changeBookName = function(newBookName) {
  if (this.name === newBookName) return false;
  else {
    this.name = newBookName;
    return true;
  }
};

Book.prototype.changeAuthorName = function(newAuthorName) {
  if (this.author === newAuthorName) return false;
  else {
    this.author = newAuthorName;
    return true;
  }
};

Book.prototype.getCurrentReader = function() {
  return this.reader;
};

const book = new Book("LOTR", "Tolkien", "1954");
console.log(book.isAvailable()); // true
console.log(book.takeBook("Ivan")); // true
console.log(book.isAvailable()); // false - книга занята
console.log(book.getCurrentReader()); // 'Ivan'
console.log(book.takeBook("Peter")); // false - книга занята
console.log(book.returnBook()); // true
console.log(book.returnBook()); // false - книга уже вернулась
console.log(book.changeBookName("Lord of the rings")); // true
console.log(book.changeBookName("Lord of the rings")); // false - одинаковое имя
console.log(book.changeAuthorName("John Tolkien")); // true
console.log(book.changeAuthorName("John Tolkien")); // false - одинаковый автор

export { Book };
// Для запуска теста вводим в терминале команду: npm run test:current -- library.test.js

class Clock {
  constructor(delay) {
    this._delay = delay
  }
  #id
  start() {
    // console.log(setInterval(1, 100))
    this.#id = setInterval(() => {console.log(1)}, this._delay);
  }

  // set delay(currentDelay) {
  //   this._delay = currentDelay;
  // }

  get delay() {
    return this._delay
  }

  stop() {
    clearInterval(this.#id)
  }
}

let time = new Clock(1000);

time.start();
setTimeout(() => {time.stop()}, 10000)
console.log(time.delay)

setInterval(() => {}, 100);

//////////////////////

class Circle {
  constructor(radius) {
    this.radius = radius
  }

  getSquare() {
   console.log(Math.PI * (this.radius ** 2))
  }

  getLong() {
    console.log(2 * Math.PI * this.radius)
  }
}

class ResizableCircle extends Circle {
  constructor(radius) {
    super(radius)
    // this = new Circle(radius)
    this.resizable = true
  }
  changeRadius(newRadius) {
    if (this.resizable)
     {this.radius = newRadius}
     else {
      console.log("переключение запрещено")
     }
  }

  toggleResizable() {
    // if (this.resizable) {
    //   this.resizable = false
    // }
    // else {
    //   this.resizable = true
    // }
    this.resizable = !this.resizable
}
}

let circle1 = new Circle(20)

// circle1.getSquare()
// circle1.getLong()

let resizableCircle = new ResizableCircle(30)

// resizableCircle.getSquare()
// resizableCircle.toggleResizable()
// resizableCircle.changeRadius(40)
// resizableCircle.getSquare()

// resizableCircle.__proto__
// resizableCircl.__proto__.constructor

function applyMixinLogging(targetClass) {
  // Ваш код здесь
  targetClass.prototype.log = function() {
    console.log("я сработал")
  }
  }

