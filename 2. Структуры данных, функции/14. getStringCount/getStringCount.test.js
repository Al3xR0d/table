import { getStringCount } from "./getStringCount";

describe("getStringCount", () => {
  it("Корректно считает строки в простых структурах", () => {
    const obj = {
      first: "string1",
      second: "string2",
      third: 123,
      fourth: true,
    };
    expect(getStringCount(obj)).toBe(2);
  });

  it("Корректно считает строки во вложенных структурах", () => {
    const nestedObj = {
      first: "string1",
      second: {
        third: "string2",
        fourth: {
          fifth: "string3",
        },
      },
      sixth: 123,
    };
    expect(getStringCount(nestedObj)).toBe(3);
  });
});
