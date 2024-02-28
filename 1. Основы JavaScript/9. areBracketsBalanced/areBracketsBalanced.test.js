import { areBracketsBalanced } from "./areBracketsBalanced";

describe("areBracketsBalanced", () => {
  it("Должны быть верными", () => {
    expect(areBracketsBalanced("()")).toBe(true);
    expect(areBracketsBalanced("(())")).toBe(true);
    expect(areBracketsBalanced("((()())())")).toBe(true);
    expect(areBracketsBalanced("")).toBe(true);
    expect(areBracketsBalanced(" ")).toBe(true);
  });

  it("Должны быть неверными", () => {
    expect(areBracketsBalanced(")(")).toBe(false);
    expect(areBracketsBalanced("())(()")).toBe(false);
    expect(areBracketsBalanced("())(")).toBe(false);
    expect(areBracketsBalanced("(")).toBe(false);
    expect(areBracketsBalanced(")")).toBe(false);
  });
});
