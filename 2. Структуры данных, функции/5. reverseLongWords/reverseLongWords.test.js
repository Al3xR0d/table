const reverseLongWords = require("./reverseLongWords");

describe("reverseLongWords", () => {
  it("Должна переворачивать слова длиннее n символов", () => {
    expect(reverseLongWords("Hey fellow warriors", 6)).toBe("Hey wollef sroirraw");
    expect(reverseLongWords("Try to reverse me", 4)).toBe("Try to esrever me");
    expect(reverseLongWords("Should be enough small", 5)).toBe("dluohS be hguone llams");
    expect(reverseLongWords("Can be shortener than zero", 0)).toBe("naC eb renetrohs naht orez");
  });
});
