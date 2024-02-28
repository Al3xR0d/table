import { findAllIndices } from "./findAllIndices";

describe("findAllIndices", () => {
  it("Должна находить индексы, когда элемент стоит на первом или последнем месте", () => {
    expect(findAllIndices([4, 2, 3, 4, 2, 2, 4], 4)).toStrictEqual([0, 3, 6]);
    expect(findAllIndices([0, 5, 10, 10000], 0)).toStrictEqual([0]);
    expect(findAllIndices([1, 1, 1, 1, 1, 1], 1)).toStrictEqual([0, 1, 2, 3, 4, 5]);
  });

  it("Должна возвращать пустой массив, если элемента нет в массиве", () => {
    expect(findAllIndices([], 4)).toStrictEqual([]);
    expect(findAllIndices([4, 2, 3, 4, 2, 2, 4], 5)).toStrictEqual([]);
  });

  it("Должна корректно работать со строками и другими типами данных", () => {
    expect(findAllIndices([5, 2, 3, "5", 2, 5, 4], "5")).toStrictEqual([3]);
    expect(findAllIndices([5, 2, 3, "5", 2, 5, 4], 5)).toStrictEqual([0, 5]);
    expect(findAllIndices([{}, {}], {})).toStrictEqual([]);

    const obj = {};
    expect(findAllIndices([obj, {}], obj)).toStrictEqual([0]);
  });

  it("Должна корректно работать с undefined", () => {
    expect(findAllIndices([5, undefined, 4], undefined)).toStrictEqual([1]);
    expect(findAllIndices([5, null, undefined], undefined)).toStrictEqual([2]);
    expect(findAllIndices([], undefined)).toStrictEqual([]);
  });
});
