import { partition } from "./partition";

describe("partition", () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const users = [
    { user: "barney", age: 36, active: false },
    { user: "fred", age: 40, active: true },
    { user: "pebbles", age: 1, active: false },
  ];

  it("Функция работает корректно", () => {
    expect(partition(numbers, (element) => element > 3)).toEqual([
      [4, 5, 6],
      [1, 2, 3],
    ]);
    expect(partition(users, (element) => element.active)).toEqual([
      [{ user: "fred", age: 40, active: true }],
      [
        { user: "barney", age: 36, active: false },
        { user: "pebbles", age: 1, active: false },
      ],
    ]);
  });

  it("Callback должна вызываться с нужными параметрами", () => {
    const mockCallback = jest.fn();
    partition(numbers, mockCallback);
    expect(mockCallback).toHaveBeenNthCalledWith(1, 1);
    expect(mockCallback).toHaveBeenNthCalledWith(2, 2);
  });

  it("Функция callback должна вызываться нужное количество раз", () => {
    const mockCallback = jest.fn();
    partition(numbers, mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(numbers.length);
  });

  it("Вызов partition должен возвращать новый массив", () => {
    const originalArray = [...numbers];
    const resultArray = partition(numbers, (element) => element > 3);
    expect(resultArray).not.toBe(numbers);
    expect(numbers).toEqual(originalArray);
  });

  it("Все значения в trueArray должны соответствовать условию callback", () => {
    const trueArray = partition(numbers, (element) => element > 3)[0];
    trueArray.forEach((element) => {
      expect(element).toBeGreaterThan(3);
    });
  });

  it("Все значения в falseArray должны соответствовать условию callback", () => {
    const falseArray = partition(numbers, (element) => element > 3)[1];
    falseArray.forEach((element) => {
      expect(element).not.toBeGreaterThan(3);
    });
  });

  it("Верно отрабатывает если callback не передан", () => {
    const result = partition([1, false, 2, 0, 3, ""]);
    expect(result).toEqual([
      [1, 2, 3],
      [false, 0, ""],
    ]);
  });

  it("Не должна менять изначальный массив", () => {
    const originalArray = [...numbers];
    partition(numbers, (element) => element > 3);
    expect(numbers).toEqual(originalArray);
  });
});
