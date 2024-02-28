# library

Реализуйте функционал для работы с книгами в библиотеке:

- Создание книги (добавление новой книги в библиотеку)
- Выдача книги читателю
- Получение книги от читателя
- Получение информации, у кого книга сейчас находится

Необходимо создать конструктор объектов `Book`, который принимает аргументы `name`, `author`, `year` 
и создает объекты со следующими полями:

- `name` - имя книги
- `author` - имя автора
- `year` - год издания книги
- `reader` - текущий читатель книги (у кого она на руках). Если книга свободна - должно быть равно `null`

Необходимо реализовать у прототипа следующие методы работы с книгой:

- `isAvailable()` - возвращает `true`/`false` - доступна ли книга для выдачи или она у кого-то на руках
- `takeBook(readerName)` - должен выдавать книгу читателю, если она доступна для выдачи, записывая его имя в `reader`. Возвращает `true`, если выдача книги возможна и она произведена, `false` - если книга уже выдана
- `returnBook()` - регистрирует возврат книги, устанавливает `reader` в `null`. Возвращает `true`, если книга была на руках, `false` если книга и так в библиотеке
- `changeBookName(newBookName)` - изменяет название книги на `newBookName`. Возвращает `true`/`false`, в зависимости от результата
- `changeAuthorName(newAuthorName)` - изменяет имя автора на `newAuthorName`. Возвращает `true`/`false` в зависимости от результата
- `getCurrentReader()` - возвращает имя текущего читателя или `null`, если книга доступна для выдачи

### Пример:
```javascript
const book = new Book("LOTR", "Tolkien", "1954");
console.log(book.isAvailable()); // true
console.log(book.takeBook('Ivan')); // true
console.log(book.isAvailable()); // false - книга занята
console.log(book.getCurrentReader()); // 'Ivan'
console.log(book.takeBook('Peter')); // false - книга занята
console.log(book.returnBook()); // true
console.log(book.returnBook()); // false - книга уже вернулась
console.log(book.changeBookName('Lord of the rings')); // true
console.log(book.changeBookName('Lord of the rings')); // false - одинаковое имя
console.log(book.changeAuthorName('John Tolkien')); // true
console.log(book.changeAuthorName('John Tolkien')); // false - одинаковый автор
```