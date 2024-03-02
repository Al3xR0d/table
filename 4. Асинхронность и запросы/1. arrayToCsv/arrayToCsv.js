function arrayToCsv(data) {
  // Пишите код здесь

  const processItem = item => {
    return item.map(el => {
      if (typeof el !== "string" && typeof el !== "number")
        throw new Error("Unexpected value");
      let value = String(el);
      if (value.includes('"') || value.includes("\n") || value.includes(",")) {
        value = `"${value.replace(/"/g, '"')}"`;
      }
      return value;
    });
  };

  if (!Array.isArray(data)) throw new Error("Unexpected value");
  return data
    .map(item => {
      if (!Array.isArray(item)) throw new Error("Unexpected value");
      let newRow = processItem(item);
      return newRow.join(",");
    })
    .join("\n");
}

let arr = [[1, 'a"b']];

console.log(arrayToCsv(arr));

export { arrayToCsv };
// Для запуска теста вводим в терминале команду: npm run test:current -- csvGenerator.test.js
