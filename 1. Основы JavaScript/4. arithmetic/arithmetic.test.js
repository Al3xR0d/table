import { arithmetic } from "./arithmetic";

describe("arithmetic", () => {
  it("Должен складывать корректно", () => {
    expect(arithmetic(10, 5, "add")).toBe(15);
    expect(arithmetic(150, 5, "add")).toBe(155);
    expect(arithmetic(3, 0, "add")).toBe(3);
    expect(arithmetic(0, 0, "add")).toBe(0);
  });

  it("Должен вычитать корректно", () => {
    expect(arithmetic(10, 5, "subtract")).toBe(5);
    expect(arithmetic(150, 120, "subtract")).toBe(30);
    expect(arithmetic(10, 20, "subtract")).toBe(-10);
    expect(arithmetic(0, 3, "subtract")).toBe(-3);
  });

  it("Должен умножать корректно", () => {
    expect(arithmetic(10, 5, "multiply")).toBe(50);
    expect(arithmetic(9, 9, "multiply")).toBe(81);
    expect(arithmetic(10, 20, "multiply")).toBe(200);
    expect(arithmetic(0, 3, "multiply")).toBe(0);
  });

  it("Должен делить корректно", () => {
    expect(arithmetic(10, 5, "divide")).toBe(2);
    expect(arithmetic(2, 5, "divide")).toBe(0.4);
    expect(arithmetic(1, 2, "divide")).toBe(0.5);
    expect(arithmetic(0, 3, "divide")).toBe(0);
  });

  it("Должен возвращать NaN если оператор некорректен", () => {
    expect(arithmetic(10, 5, "some-random-operator")).toBe(NaN);
    expect(arithmetic(123, 123)).toBe(NaN);
  });
});
