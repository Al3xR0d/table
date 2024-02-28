import { sequenceSum } from "./sequenceSum";

describe("sequenceSum", () => {
  it("Правильно работает с отрицательными числами", () => {
    expect(sequenceSum(-2, -2)).toBe(-2);
    expect(sequenceSum(-5, -1)).toBe(-15); // -5 -4 -3 -2 -1 = -15
  });

  it("Возвращает NaN, если начальное число больше конечного", () => {
    expect(sequenceSum(5, 1)).toBeNaN();
  });

  it("Правильно работает с большими числами", () => {
    expect(sequenceSum(1000, 1000)).toBe(1000);
    expect(sequenceSum(1000, 1005)).toBe(6015);
  });

  it("Обрабатывает некорректные типы данных", () => {
    expect(sequenceSum("1", "5")).toBeNaN();
    expect(sequenceSum(null, undefined)).toBeNaN();
    expect(sequenceSum({}, [])).toBeNaN();
  });
});
