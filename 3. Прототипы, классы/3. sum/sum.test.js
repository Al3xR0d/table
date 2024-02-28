import { sum } from "./sum";

describe("sum", () => {
  it("Должна использовать оператор spread", () => {
    const functionString = sum.toString();
    expect(functionString).toMatch("objectSpread");
  });

  it("Должна суммировать правильно", () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
    expect(sum(-10, 15, 100)).toBe(105);
  });

  it("Должна возвращать 0 при отсутствии аргументов", () => {
    expect(sum()).toBe(0);
  });

  it("Должна игнорировать значения тех типов данных, которые не могут быть преобразованы к числу", () => {
    expect(sum(1, "string", {}, [], true, false, undefined, NaN)).toBe(2);
  });

  it("Должна превращать значения в число, если это возможно", () => {
    expect(sum(1, "2", "3", true)).toBe(7);
  });
});
