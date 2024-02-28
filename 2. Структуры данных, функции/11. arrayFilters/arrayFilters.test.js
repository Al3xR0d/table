import { inArray, inRange, notInArray } from "./arrayFilters";

describe("arrayFilters", () => {
  describe("inRange", () => {
    it("Должна возвращать функцию", () => {
      expect(typeof inRange(1, 2)).toBe("function");
    });

    it("Должна возвращать false для всех элементов, если a > b", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(arr.filter(inRange(5, 3))).toEqual([]);
    });

    it("Должна удалять из массива значения, не лежащие в данном промежутке или не являющиеся числом", () => {
      const arr = [1, 2, 3, 4, 5, "6", "text", undefined, NaN];
      expect(arr.filter(inRange(3, 5))).toEqual([3, 4, 5]);
    });
  });

  describe("inArray", () => {
    it("Должны возвращать функции", () => {
      expect(typeof inArray([1, 2, 3])).toBe("function");
    });

    it("Должна удалять из фильтруемого массива значения, не находящиеся в массиве, переданном в аргументы inArray", () => {
      const arr = [1, 2, 4, 5];
      expect(arr.filter(inArray([1, 2, 3]))).toEqual([1, 2]);
    });
  });

  describe("notInArray", () => {
    it("Должны возвращать функции", () => {
      expect(typeof notInArray([1, 2, 3])).toBe("function");
    });

    it("Должна удалять из фильтруемого массива значения, находящиеся в массиве, переданном в аргументы notInArray", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(arr.filter(notInArray([1, 2, 3]))).toEqual([4, 5]);
    });
  });
});
