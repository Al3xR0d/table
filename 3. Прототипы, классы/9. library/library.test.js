import { Book } from "./library";

describe("Book", () => {
  let book;

  beforeEach(() => {
    book = new Book("JavaScript: The Good Parts", "Douglas Crockford", 2008);
  });

  it("Должен создавать экземпляр Book без функций в нем", () => {
    expect(book.hasOwnProperty("isAvailable")).toBe(false);
    expect(book.hasOwnProperty("takeBook")).toBe(false);
    expect(book.hasOwnProperty("returnBook")).toBe(false);
    expect(book.hasOwnProperty("changeBookName")).toBe(false);
    expect(book.hasOwnProperty("changeAuthorName")).toBe(false);
    expect(book.hasOwnProperty("getCurrentReader")).toBe(false);
  });

  it("Должен иметь прототип со всеми функциями", () => {
    expect(Book.prototype).toEqual(
      expect.objectContaining({
        isAvailable: expect.any(Function),
        takeBook: expect.any(Function),
        returnBook: expect.any(Function),
        changeBookName: expect.any(Function),
        changeAuthorName: expect.any(Function),
        getCurrentReader: expect.any(Function),
      })
    );
  });

  it("Должен показывать актуальное состояние книги", () => {
    expect(book.isAvailable()).toBe(true);
    book.takeBook("Reader");
    expect(book.isAvailable()).toBe(false);
    book.returnBook();
    expect(book.isAvailable()).toBe(true);
  });

  it("Должен выдавать значение текущего читателя", () => {
    expect(book.getCurrentReader()).toBeNull();
    book.takeBook("Reader");
    expect(book.getCurrentReader()).toBe("Reader");
    book.returnBook();
    expect(book.getCurrentReader()).toBeNull();
  });

  it("Должен изменять имя автора", () => {
    book.changeAuthorName("New Author");
    expect(book.author).toBe("New Author");
  });

  it("Должен корректно возвращать true/false при изменении имени автора", () => {
    const res = book.changeAuthorName("New Author");
    expect(book.author).toBe("New Author");
    expect(res).toBe(true);

    const res2 = book.changeAuthorName("New Author");
    expect(book.author).toBe("New Author");
    expect(res2).toBe(false);
  });

  it("Должен изменять имя книги", () => {
    book.changeBookName("New Book Title");
    expect(book.name).toBe("New Book Title");
  });

  it("Должен корректно возвращать true/false при изменении имени книги", () => {
    const res = book.changeBookName("New Book Title");
    expect(book.name).toBe("New Book Title");
    expect(res).toBe(true);

    const res2 = book.changeBookName("New Book Title");
    expect(book.name).toBe("New Book Title");
    expect(res2).toBe(false);
  });
});
