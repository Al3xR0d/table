import { throttle } from "./throttle";

describe("throttle", () => {
  jest.useFakeTimers();

  it("Должна позволять вызывать функцию не чаще, чем один раз в указанный промежуток времени", () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 500);

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1); // Функция должна быть вызвана сразу

    // Попытаемся вызвать функцию второй раз через 100 мс
    jest.advanceTimersByTime(100);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1); // Функция не должна быть вызвана второй раз, так как throttle еще активен

    // Попытаемся вызвать функцию после истечения таймера throttle
    jest.advanceTimersByTime(400); // Прошло 500 мс с первого вызова
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(2); // Теперь функция должна быть вызвана второй раз
  });

  it("Должна передать контекст вызова и аргументы throttled-функции в оригинальную функцию", () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 500);
    const context = { value: 42 };
    const arg1 = "test";
    const arg2 = 100;

    throttledFunc.call(context, arg1, arg2);
    jest.runAllTimers();

    // Проверяем, что функция была вызвана с правильными контекстом и аргументами
    expect(func).toHaveBeenCalledWith(arg1, arg2);
    expect(func).toHaveBeenLastCalledWith(arg1, arg2);
    expect(func.mock.instances[0]).toBe(context);
  });

  afterEach(() => {
    jest.clearAllTimers();
  });
});
