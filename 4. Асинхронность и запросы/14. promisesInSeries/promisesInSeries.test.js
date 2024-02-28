import { promisesInSeries } from "./promisesInSeries";

describe("promisesInSeries", () => {
  it("Должна вызывать функции в правильной последовательности", async () => {
    let firstCalled = false;
    let secondCalled = false;

    const firstPromise = jest.fn(
      () =>
        new Promise((resolve) => {
          firstCalled = true;
          setTimeout(() => resolve("first"), 10);
        })
    );

    const secondPromise = jest.fn(
      () =>
        new Promise((resolve) => {
          expect(firstCalled).toBeTruthy();
          secondCalled = true;
          setTimeout(() => resolve("second"), 10);
        })
    );

    const thirdPromise = jest.fn(
      () =>
        new Promise((resolve) => {
          expect(secondCalled).toBeTruthy();
          setTimeout(() => resolve("third"), 10);
        })
    );

    await promisesInSeries([firstPromise, secondPromise, thirdPromise]);

    expect(firstPromise).toHaveBeenCalled();
    expect(secondPromise).toHaveBeenCalled();
    expect(thirdPromise).toHaveBeenCalled();
  });

it("Должна возвращать Promise с правильным результатом", async () => {
    const firstPromise = () =>
        new Promise((resolve) => setTimeout(() => resolve(300), 30));

    const secondPromise = (prev) =>
        new Promise((resolve) => setTimeout(() => resolve(prev + 200), 20));

    const thirdPromise = (prev) =>
        new Promise((resolve) => setTimeout(() => resolve(prev + 100), 10));


    await expect(promisesInSeries([firstPromise, secondPromise, thirdPromise])).resolves.toBe(600);
});

  it("Должна возвращать Promise с результатом undefined на вызов без параметров", async () => {
    await expect(promisesInSeries([])).resolves.toBeUndefined();
  });
});
