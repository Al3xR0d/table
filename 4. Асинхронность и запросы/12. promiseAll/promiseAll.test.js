import { promiseAll } from "./promiseAll";

describe("promiseAll", () => {
  it("Должна возвращать массив результатов с результатами в правильном порядке", async () => {
    const firstPromise = new Promise((resolve) =>
      setTimeout(() => resolve(300), 300)
    );
    const secondPromise = new Promise((resolve) =>
      setTimeout(() => resolve(200), 200)
    );
    const thirdPromise = new Promise((resolve) =>
      setTimeout(() => resolve(100), 100)
    );

    const result = await promiseAll([
      firstPromise,
      secondPromise,
      thirdPromise,
    ]);
    expect(result).toEqual([300, 200, 100]);
  });

  it("Должна возвращать Promise<[]> на вызов с пустым массивом", async () => {
    const result = await promiseAll([]);
    expect(result).toEqual([]);
  });

  it("не должна вызывать Promise.all стандартной библиотеки", () => {
    const spy = jest.spyOn(global.Promise, "all");
    promiseAll([]);
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
});
