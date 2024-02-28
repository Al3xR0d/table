import { getFileSize, sumFileSizes, fileSizes } from "./sumFileSizes";

describe("sumFileSizes", () => {
  it("Суммирует размеры двух файлов", (done) => {
    sumFileSizes("testFile1", "testFile2", (sum, error) => {
      expect(error).toBeUndefined();
      expect(sum).toBe(65 + 48);
      done();
    });
  });

  it("Возвращает ошибку для несуществующего файла", (done) => {
    sumFileSizes("testFile1", "nonExistentFile", (sum, error) => {
      expect(error).toBeDefined();
      expect(error.message).toContain("not found");
      done();
    });
  });
});
