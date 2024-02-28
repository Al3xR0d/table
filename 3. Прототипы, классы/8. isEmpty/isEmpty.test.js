import { isEmpty, isEmptyWithProtos } from "./isEmpty";

describe("isEmpty", () => {
  it("Должна возвращать true на пустой объект без прототипа", () => {
    const obj = Object.create(null);
    expect(isEmpty(obj)).toBe(true);
  });

  it("Должна возвращать true на пустой объект с прототипом", () => {
    const obj = {};
    expect(isEmpty(obj)).toBe(true);
  });

  it("Должна возвращать false на непустой объект", () => {
    const obj = { prop: "value" };
    expect(isEmpty(obj)).toBe(false);
  });
});

describe("isEmptyWithProtos", () => {
  it("Должна возвращать true на пустой объект без прототипа", () => {
    const obj = Object.create(null);
    expect(isEmptyWithProtos(obj)).toBe(true);
  });

  it("Должна возвращать true на пустой объект с пустым прототипом", () => {
    const protoObj = Object.create(null);
    const obj = Object.create(protoObj);
    expect(isEmptyWithProtos(obj)).toBe(true);
  });

  it("Должна возвращать false на объект с прототипом со свойствами", () => {
    const protoObj = { someProp: "someValue" };
    const obj = Object.create(protoObj);
    expect(isEmptyWithProtos(obj)).toBe(false);
  });

  it("Должна возвращать false на непустой объект", () => {
    const obj = { prop: "value" };
    expect(isEmptyWithProtos(obj)).toBe(false);
  });

  it("Должна возвращать false на пустой объект с прототипом", () => {
    const obj = {};
    expect(isEmptyWithProtos(obj)).toBe(false);
  });
});
