import { merge } from "./merge";

describe("merge", () => {
  it("Должна использовать оператор spread", () => {
    const functionString = merge.toString();
    expect(functionString).toMatch("objectSpread");
  });

  it("Должна объединять объекты", () => {
    const obj1 = { name: "John" };
    const obj2 = { age: 22 };
    const obj3 = { hobby: "chess" };
    const result = merge(obj1, obj2, obj3);

    expect(result).toEqual({ name: "John", age: 22, hobby: "chess" });
  });

  it("Должна перезаписывать повторяющиеся поля", () => {
    const obj1 = { name: "John", age: 22 };
    const obj2 = { age: 30 };
    const result = merge(obj1, obj2);

    expect(result).toEqual({ name: "John", age: 30 });
  });

  it("Должна возвращать пустой объект, если не переданы аргументы", () => {
    const result = merge();
    expect(result).toEqual({});
  });

  it("Должна игнорировать необъектные аргументы", () => {
    const obj1 = { name: "John" };
    const notAnObj = "Not an object";
    const result = merge(obj1, notAnObj);

    expect(result).toEqual({ name: "John" });
  });
});
