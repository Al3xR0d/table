const wrapInParagraph = require("./wrapInParagraph");

describe("wrapInParagraph", () => {
  it("Должна корректно оборачивать в тег p", () => {
    const text1 = "This is a paragraph"
    const text2 = `Some
simple multiline
text`;
    const text3 = "some\ntext";

    expect(wrapInParagraph(text1)).toBe("<p>This is a paragraph</p>");

    expect(wrapInParagraph(text2)).toBe(
      "<p>Some</p>\n<p>simple multiline</p>\n<p>text</p>",
    );

    expect(wrapInParagraph(text3)).toBe("<p>some</p>\n<p>text</p>");
  });
});
