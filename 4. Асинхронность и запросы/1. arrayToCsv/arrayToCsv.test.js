import { arrayToCsv } from "./arrayToCsv";

describe("arrayToCsv", () => {
  it("Работает в простом случае и аргументах по-умолчанию", () => {
    expect(
      arrayToCsv([
        [1, 2],
        ["a", "b"],
      ])
    ).toBe("1,2\na,b");
  });

  it("Корректно оборачиваем строки с запятыми", () => {
    expect(
      arrayToCsv([
        [1, 2],
        ["a,b", "c,d"],
      ])
    ).toBe('1,2\n"a,b","c,d"');
    expect(
      arrayToCsv([
        ["a,", "b"],
        ["c", "d"],
      ])
    ).toBe('"a,",b\nc,d');
  });

  it("Корректно оборачиваем строки с кавычками", () => {
    expect(
      arrayToCsv([
        ['a"b', "c"],
        ["d", "e"],
      ])
    ).toBe('"a""b",c\nd,e');
    expect(
      arrayToCsv([
        ['"a"', "b"],
        ["c", "d"],
      ])
    ).toBe('"""a""",b\nc,d');
  });

  it("Выбрасывает ошибку при некорректных данных", () => {
    const incorrectData = () => {
      arrayToCsv([
        [1, 2],
        [() => {}, "b"],
      ]);
    };
    expect(incorrectData).toThrow("Unexpected value");

    const incorrectData2 = () => {
      arrayToCsv([
        [1, 2],
        [{}, "b"],
      ]);
    };
    expect(incorrectData2).toThrow("Unexpected value");

    const incorrectData3 = () => {
      arrayToCsv([
        [1, 2],
        [undefined, "b"],
      ]);
    };
    expect(incorrectData3).toThrow("Unexpected value");
  });
});
