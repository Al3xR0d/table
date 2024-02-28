import { checkWith } from "./checkWith.js";

describe("checkWith", () => {
  it("Должен возвращать true", () => {
    expect(checkWith(10, n => n)).toBe(true);
    expect(checkWith("1", n => n[0])).toBe(true);
    expect(checkWith(false, () => true)).toBe(true);
    expect(checkWith(5, n => n - 4)).toBe(true);
  });

  it("Должен возвращать false", () => {
    expect(checkWith(undefined, n => n)).toBe(false);
    expect(checkWith(10, n => n - 10)).toBe(false);
    expect(checkWith("str", () => {})).toBe(false);
    expect(checkWith(true, () => "")).toBe(false);
  });
});
