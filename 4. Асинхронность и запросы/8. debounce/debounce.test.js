import { debounce } from "./debounce";

jest.useFakeTimers();

describe("debounce", () => {
  it("Должна блокировать вызовы функции в течение времени задержки, пока функция вызывается раньше, чем время задержки", () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 200);

    debouncedFunc();
    expect(func).not.toHaveBeenCalled(); // Функция не должна вызываться сразу

    // До истечения задержки снова вызываем функцию 4 раза
    for (let i = 1; i <= 4; i++) {
      jest.advanceTimersByTime(100);
      debouncedFunc();
    }

    expect(func).not.toHaveBeenCalled(); // Функция все еще не должна быть вызвана

    // После последнего вызова ждем, когда пройдет время задержки
    jest.advanceTimersByTime(205);
    expect(func).toHaveBeenCalledTimes(1); // Функция должна быть вызвана один раз
  });

  it("Должна передать контекст вызова и аргументы debounced-функции в оригинальную функцию", () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 200);
    const context = { a: 1 };
    const args = [1, 2, 3];

    debouncedFunc.apply(context, args);

    // После истечения времени задержки
    jest.advanceTimersByTime(205);

    expect(func).toHaveBeenCalledWith(...args); // Функция должна быть вызвана с правильными аргументами
    expect(func).toHaveBeenLastCalledWith(...args); // Последний вызов с этими же аргументами
    expect(func.mock.instances[0]).toBe(context); // Контекст вызова должен быть передан
  });
});
