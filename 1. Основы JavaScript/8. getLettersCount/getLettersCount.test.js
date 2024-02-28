import { getLettersCount } from "./getLettersCount";

describe("getLettersCount", () => {
  it("Должен вычислять количество букв в строке", () => {
    expect(getLettersCount("aaabbccde")).toEqual({
      a: 3,
      b: 2,
      c: 2,
      d: 1,
      e: 1,
    });
  });
  it("Должен работать с пустой строкой", () => {
    expect(getLettersCount("")).toEqual({});
  });
  it("Должен приводить все символы к нижнему регистру перед подсчетом", () => {
    expect(getLettersCount("BBccDe")).toEqual({
      b: 2,
      c: 2,
      d: 1,
      e: 1,
    });
  });
});
