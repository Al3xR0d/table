import { Addition } from "./prototypesDecorator";

describe("prototypesDecorator", () => {
  const logMock = jest.spyOn(console, "log");

  beforeEach(() => {
    logMock.mockClear();
  });

  afterAll(() => {
    logMock.mockRestore();
  });

  it("Функция выполняется в контексте экземпляра класса", () => {
    const instance = new Addition(5);
    expect(instance.add(1)).toBe(6);
  });

  it("Вызовы add независимы", () => {
    const firstInstance = new Addition(5);
    const secondInstance = new Addition(10);
    firstInstance.add(1);
    secondInstance.add(1);
    expect(logMock).toHaveBeenCalledTimes(2);
  });

  it("Экземпляры Addition независимы", () => {
    const firstInstance = new Addition(5);
    const secondInstance = new Addition(5);
    expect(firstInstance.add).toEqual(secondInstance.add);
  });

  test('Функция выводит в консоль "called"', () => {
    const instance = new Addition(5);
    instance.add(2);
    expect(logMock).toHaveBeenCalledWith("called");
  });

  it("Функция возвращает правильный результат при декорировании", () => {
    const instance = new Addition(5);
    const result = instance.add(3, 5, 6);
    expect(result).toBe(19);
    expect(logMock).toHaveBeenCalledWith("called");
  });
});
