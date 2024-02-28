import { getMostSenior } from "./getMostSenior";

describe("getMostSenior", () => {
  it("Один человек имеет наибольший возраст", () => {
    const testData = [{ age: 30 }, { age: 40 }, { age: 50 }];
    const result = getMostSenior(testData);
    expect(result).toEqual([{ age: 50 }]);
  });

  it("Несколько людей имеют одинаковый наибольший возраст", () => {
    const testData = [{ age: 50 }, { age: 40 }, { age: 50 }];
    const result = getMostSenior(testData);
    expect(result).toEqual([{ age: 50 }, { age: 50 }]);
  });

  // Тест на случай пустого массива
  it("Должна возвращать пустой массив, если входной массив пуст", () => {
    const testData = [];
    const result = getMostSenior(testData);
    expect(result).toEqual([]);
  });

  // Тест на случай отсутствия параметра age
  it("Должна игнорировать объекты без параметра age", () => {
    const testData = [{ age: 50 }, { age: 40 }, {}];
    const result = getMostSenior(testData);
    expect(result).toEqual([{ age: 50 }]);
  });

  // Тест на случай, если в функцию передан `null` или `undefined`
  it("Должна возвращать пустой массив, если входное значение - null или undefined", () => {
    expect(getMostSenior(null)).toEqual([]);
    expect(getMostSenior(undefined)).toEqual([]);
  });
});
