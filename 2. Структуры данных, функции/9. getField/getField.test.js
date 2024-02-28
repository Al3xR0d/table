import { getField } from "./getField";

describe("getField", () => {
  it("Должна корректно доставать поля из объектов", () => {
    const data = [
      { name: "Denis", age: 25 },
      { name: "Ivan" },
      { name: "Ann", age: 18 },
    ];
    expect(getField(data, "age")).toEqual([25, undefined, 18]);
  });

  it("Должна возвращать пустой массив, если массив объектов не передан", () => {
    expect(getField(undefined, "age")).toEqual([]);
  });

  it("Должна возвращать массив с undefined для несуществующих полей", () => {
    const data = [{ name: "Denis" }, { name: "Ivan" }];
    expect(getField(data, "age")).toEqual([undefined, undefined]);
  });

  it("Должна возвращать пустой массив, если передан пустой массив объектов", () => {
    expect(getField([], "age")).toEqual([]);
  });

  it("Должна обрабатывать поля с пустыми значениями корректно", () => {
    const data = [
      { name: "", age: null },
      { name: null, age: undefined },
    ];
    expect(getField(data, "name")).toEqual(["", null]);
    expect(getField(data, "age")).toEqual([null, undefined]);
  });
});
