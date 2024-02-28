import { calculatePrice } from "./calculatePrice";

describe("calculatePrice", () => {
  it("Должна подсчитывать стоимость", () => {
    const data = [
      { type: "food", price: 100 },
      { type: "clothes", price: 7300 },
      { type: "other", price: 1400 },
    ];
    expect(calculatePrice(data)).toBe(8800);
  });

  it("Стоимость пустого массива заказов должна быть равна нулю", () => {
    expect(calculatePrice([])).toBe(0);
  });

  it("Если массив не передан, цена должна быть равна нулю", () => {
    expect(calculatePrice()).toBe(0);
  });

  it("Если передан не массив, цена должна быть равна нулю", () => {
    expect(calculatePrice({})).toBe(0); // передаем объект
    expect(calculatePrice("string")).toBe(0); // передаем строку
  });

  it("Если передан null, цена должна быть равна нулю", () => {
    expect(calculatePrice(null)).toBe(0);
  });
});
