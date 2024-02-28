import {
  getRepeatableData,
  NotFoundError,
  AttemptsLimitExceeded,
  TemporaryError,
} from "./getRepeatableData";

describe("getRepeatableData", () => {
  it("Возвращает данные, когда getData успешно выполняется", () => {
    const getDataMock = jest.fn((name) => "Hello, " + name);
    expect(getRepeatableData(getDataMock, "Ivan", 3)).toBe("Hello, Ivan");
    expect(getDataMock).toHaveBeenCalledWith("Ivan");
  });

  it("Повторяет попытки при TemporaryError и в конце успешно возвращает данные", () => {
    const temporaryError = new Error("TemporaryError");
    temporaryError.name = "TemporaryError";
    const getDataMock = jest
      .fn()
      .mockImplementationOnce(() => {
        throw temporaryError;
      })
      .mockImplementationOnce((name) => "Hello, " + name);

    expect(getRepeatableData(getDataMock, "Ivan", 3)).toBe("Hello, Ivan");
    expect(getDataMock).toHaveBeenCalledTimes(2);
  });

  it("Выбрасывает исключение AttemptsLimitExceeded при превышении максимального числа запросов", () => {
    const temporaryError = new Error("TemporaryError");
    temporaryError.name = "TemporaryError";
    const getDataMock = jest.fn(() => {
      throw temporaryError;
    });

    expect(() => getRepeatableData(getDataMock, "Ivan", 2)).toThrow(
      AttemptsLimitExceeded
    );
    expect(getDataMock).toHaveBeenCalledTimes(3);
  });

  it("Выбрасывает исключение NotFoundError без повторных попыток", () => {
    const notFoundError = new Error("NotFoundError");
    notFoundError.name = "NotFoundError";
    const getDataMock = jest.fn(() => {
      throw notFoundError;
    });

    expect(() => getRepeatableData(getDataMock, "Ivan", 3)).toThrow(NotFoundError);
    expect(getDataMock).toHaveBeenCalledTimes(1);
  });
});
