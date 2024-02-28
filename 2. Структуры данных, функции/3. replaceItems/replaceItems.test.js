import { replaceItemsClear, replaceItemsMutate } from "./replaceItems";

describe("replaceItemsClear", () => {
  it("Не должна мутировать входящий массив", () => {
    const sourceArr = [1, 4, 3, 4, 5];
    const check = sourceArr.slice();
    const result = replaceItemsClear(sourceArr, 4, "replaced");
    expect(result).toEqual([1, "replaced", 3, "replaced", 5]);
    expect(result).not.toBe(sourceArr);
    expect(sourceArr).toEqual(check);
  });

  it("Должна корректно заменять первый и последний элементы", () => {
    expect(replaceItemsClear([1, 4, 3, 4, 1], 1, "replaced")).toEqual([
      "replaced",
      4,
      3,
      4,
      "replaced"
    ]);
  });

  it("Должна корректно работать со строками", () => {
    expect(replaceItemsClear(["1", 4, 3, 4, 1], "1", "replaced")).toEqual([
      "replaced",
      4,
      3,
      4,
      1
    ]);
  });
});

describe("replaceItemsMutate", () => {
  it("Должна мутировать входящий массив", () => {
    const sourceArr = [1, 4, 3, 4, 5];
    const check = sourceArr.slice();
    const result = replaceItemsMutate(sourceArr, 4, "replaced");
    expect(result).toEqual([1, "replaced", 3, "replaced", 5]);
    expect(result).toBe(sourceArr);
    expect(sourceArr).not.toEqual(check);
  });

  it("Должна корректно заменять первый и последний элементы", () => {
    const inputArr = [1, 4, 3, 4, 1];
    const result = replaceItemsMutate(inputArr, 1, "replaced");
    expect(result).toEqual(["replaced", 4, 3, 4, "replaced"]);
    expect(result).toBe(inputArr);
  });

  it("Должна корректно работать со строками", () => {
    const inputArr = ["1", 4, 3, 4, 1];
    const result = replaceItemsMutate(inputArr, "1", "replaced");
    expect(result).toEqual(["replaced", 4, 3, 4, 1]);
    expect(result).toBe(inputArr);
  });
});
