describe("objectCreate", () => {
  it("Должен возвращать пустой объект при вызове с аргументом null", () => {
    const obj = Object.create(null);
    expect(Object.getPrototypeOf(obj)).toBe(null);
    expect(Object.getOwnPropertyNames(obj).length).toBe(0);
  });

  it("Аргумент `prototype` отрабатывает должным образом", () => {
    const proto = { a: 1 };
    const obj = Object.create(proto);
    expect(Object.getPrototypeOf(obj)).toBe(proto);
    expect(obj.a).toBe(1);
  });

  it("Аргумент `properties` отрабатывает должным образом", () => {
    const obj = Object.create(
      {},
      {
        p: {
          value: 42,
          writable: true,
          enumerable: true,
          configurable: true,
        },
      }
    );
    expect(obj.p).toBe(42);
  });

  it("Объект A должен является прототипом объекта B", () => {
    const A = { a: 1 };
    const B = Object.create(A);
    expect(A.isPrototypeOf(B)).toBeTruthy();
  });

  it("Объекты A и B должны быть разными", () => {
    const A = { a: 1 };
    const B = Object.create(A);
    expect(A).not.toBe(B);
  });

  it("При вызове без аргументов должна быть брошена ошибка TypeError", () => {
    expect(() => Object.create()).toThrow(TypeError);
  });

  it("Если первый параметр не является объектом или null, то должна быть брошена ошибка TypeError", () => {
    expect(() => Object.create(undefined)).toThrow(TypeError);
    expect(() => Object.create(1)).toThrow(TypeError);
    expect(() => Object.create("string")).toThrow(TypeError);
    expect(() => Object.create(false)).toThrow(TypeError);
  });
});
