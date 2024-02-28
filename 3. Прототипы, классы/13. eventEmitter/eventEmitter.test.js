import { BroadcastEventEmitter, EventEmitter } from "./eventEmitter";

describe("EventEmitter", () => {
  let emitter;

  beforeEach(() => {
    emitter = new EventEmitter();
  });

  it("Добавление слушателя события", () => {
    const mockCallback = jest.fn();
    emitter.on("test-event", mockCallback);
    emitter.emit("test-event");
    expect(mockCallback).toHaveBeenCalled();
  });

  it("Удаление слушателя события", () => {
    const mockCallback = jest.fn();
    emitter.on("test-event", mockCallback);
    emitter.off("test-event", mockCallback);
    emitter.emit("test-event");
    expect(mockCallback).not.toHaveBeenCalled();
  });

  it("Добавление `одноразового` слушателя", () => {
    const mockCallback = jest.fn();
    emitter.once("test-event", mockCallback);
    emitter.emit("test-event");
    emitter.emit("test-event");
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it("Передача аргументов", () => {
    const mockCallback = jest.fn();
    emitter.on("test-event", mockCallback);
    emitter.emit("test-event", "arg1", "arg2");
    expect(mockCallback).toHaveBeenCalledWith("arg1", "arg2");
  });
});

describe("тестирование класса BroadcastEventEmitter", () => {
  let broadcastEmitter;

  beforeEach(() => {
    broadcastEmitter = new BroadcastEventEmitter();
  });

  it("Проверка наследования от EventEmitter", () => {
    expect(broadcastEmitter).toBeInstanceOf(EventEmitter);
  });

  it("Вызов всех событий", () => {
    const mockCallback1 = jest.fn();
    const mockCallback2 = jest.fn();

    broadcastEmitter.on("test-event-1", mockCallback1);
    broadcastEmitter.on("test-event-2", mockCallback2);
    broadcastEmitter.emit("*");

    expect(mockCallback1).toHaveBeenCalled();
    expect(mockCallback2).toHaveBeenCalled();
  });

  it("Передача аргументов", () => {
    const mockCallback = jest.fn();

    broadcastEmitter.on("test-event", mockCallback);
    broadcastEmitter.emit("*", "arg1", "arg2");

    expect(mockCallback).toHaveBeenCalledWith("arg1", "arg2");
  });
});
