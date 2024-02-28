const defaultTo = require("./defaultTo");

describe("defaultTo", () => {
  it("Должен правильно определить, следует ли возвращать значение по умолчанию", () => {
    expect(defaultTo(1, 10)).toBe(1);
    expect(defaultTo(undefined, 10)).toBe(10);
    expect(defaultTo(NaN, 25)).toBe(25);
    expect(defaultTo(null, { name: "John" })).toEqual({ name: "John" });
  });
});
