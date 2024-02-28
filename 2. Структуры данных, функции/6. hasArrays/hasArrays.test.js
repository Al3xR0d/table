import { hasArrays } from "./hasArrays";

describe("hasArrays", () => {
  it("Функция должна определять, есть ли массив в исходном массиве", () => {
    expect(hasArrays([false, true, [1, 2], {}, [], 1, 0, NaN])).toBe(true);

    expect(hasArrays([1, 2, 3])).toBe(false);
    expect(hasArrays([{}])).toBe(false);
    expect(hasArrays([])).toBe(false);

    const arrayLike = {0: 'abc', length: 1};
    expect(hasArrays([arrayLike])).toBe(false);
  });
});
