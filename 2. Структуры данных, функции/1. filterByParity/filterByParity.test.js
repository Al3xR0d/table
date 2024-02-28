import { filterByParity } from "./filterByParity";

const PARITY = {
  EVEN: "even",
  ODD: "odd",
};

describe("filterByParity", () => {
  const dataset1 = [1, 2, 3, 4, 5, 6];
  const dataset2 = [1, 3, 5];
  const dataset3 = [1, 1, 1, 2, 2, 2, 3, 3, 3];
  const dataset4 = [0, 0, 0, 1, 2];

  it("Функция не должна мутировать исходный массив", () => {
    const setFn = jest.fn(() => {
      return true;
    })
    const data = [1, 2, 3, 4, 5, 6];
    const proxyData = new Proxy(data, {
      set: setFn,
    })
    const result = filterByParity(proxyData, PARITY.EVEN)
    expect(setFn).not.toBeCalled();
    expect(result === proxyData).not.toBe(true);
  });

  it("Должна работать с четными числами", () => {
    expect(filterByParity(dataset1, PARITY.EVEN)).toEqual([2, 4, 6]);
    expect(filterByParity(dataset2, PARITY.EVEN)).toEqual([]);
    expect(filterByParity(dataset3, PARITY.EVEN)).toEqual([2, 2, 2]);
    expect(filterByParity(dataset4, PARITY.EVEN)).toEqual([0, 0, 0, 2]);
  });

  it("Должна работать с нечетными числами", () => {
    expect(filterByParity(dataset1, PARITY.ODD)).toEqual([1, 3, 5]);
    expect(filterByParity(dataset2, PARITY.ODD)).toEqual([1, 3, 5]);
    expect(filterByParity(dataset3, PARITY.ODD)).toEqual([
      1, 1, 1, 3, 3, 3,
    ]);
    expect(filterByParity(dataset4, PARITY.ODD)).toEqual([1]);
  });

  it("Должна корректно работать с пустым массивом на входе", () => {
    expect(filterByParity([], PARITY.ODD)).toEqual([]);
    expect(filterByParity([], PARITY.EVEN)).toEqual([]);
  });
});
