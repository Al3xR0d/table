import { getDaysBetweenDates } from "./getDaysBetweenDates";

describe("getDaysBetweenDates", () => {
  it("Возвращает количество полных дней между датами", () => {
    expect(getDaysBetweenDates("1-1-2020", "1-2-2020")).toBe(1);
  });

  it("Возвращает отрицательное число, если первая дата больше второй", () => {
    expect(getDaysBetweenDates("1-2-2020", "1-1-2020")).toBe(-1);
  });

  it("Обработка дат в миллисекундах", () => {
    expect(getDaysBetweenDates(1409796000000, 1409925600000)).toBe(1);
  });

  it("Обработка дат в виде текста", () => {
    expect(getDaysBetweenDates("1-1-2020", "1-3-2020")).toBe(2);
  });

  describe("невалидные данные", () => {
    it("Возвращает NaN, если первая дата Invalid date", () => {
      expect(getDaysBetweenDates("invalid-date", "1-1-2020")).toBeNaN();
    });

    it("Возвращает NaN, если вторая дата Invalid date", () => {
      expect(getDaysBetweenDates("1-1-2020", "invalid-date")).toBeNaN();
    });

    it("Возвращает NaN, если обе даты Invalid date", () => {
      expect(getDaysBetweenDates("invalid-date", "invalid-date")).toBeNaN();
    });

    it("Проброс исключения TypeError, если передано менее 2-х аргументов", () => {
      expect(() => getDaysBetweenDates(null)).toThrow(TypeError);
    });
  });

  describe("Крайние случаи", () => {
    it("Разница между датами меньше дня, но первая дата меньше второй", () => {
      expect(getDaysBetweenDates("1-1-2020 23:59", "1-2-2020 00:01")).toBe(0);
    });

    it("Разница между датами меньше дня, но первая дата больше второй", () => {
      const dateA = new Date(2023, 0, 2); // Допустим, 2 января 2023 года
      const dateB = new Date(dateA.getTime() - 1000); // Меньше на одну секунду
      expect(getDaysBetweenDates(dateA, dateB)).toEqual(-0); // Принимаем -0 как корректный результат
    });

    it("Разница между датами ровно 24 часа", () => {
      expect(getDaysBetweenDates("1-1-2020", "1-2-2020 00:00")).toBe(1);
    });

    it("Даты равны между собой", () => {
      expect(getDaysBetweenDates("1-1-2020", "1-1-2020")).toBe(0);
    });

    it("Одна из дат равна null", () => {
      expect(getDaysBetweenDates(null, "1-1-2020")).toBeNaN();
      expect(getDaysBetweenDates("1-1-2020", null)).toBeNaN();
    });
  });
});
