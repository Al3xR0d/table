function arrayToCsv(data) {
  // Пишите код здесь
  // return data
  //   .reduce((acc, item) => {
  //     acc += item.join(",") + "\n";
  //     return acc;
  //   }, "")
  //   .slice(0, -1);
  if (!Array.isArray(data)) throw new Error("Unexpected value");
  // const separator = ",";
  let result = "";

  // for (let i = 0; i < data.length; i++) {
  //   if (!Array.isArray(data[i])) throw new Error("Unexpected value");
  //   for (let j = 0; j < data[i].length; j++) {
  //     if (typeof data[i][j] !== "string" && typeof data[i][j] !== "number")
  //       throw new Error("Unexpected value");
  //     let value = String(data[i][j]);
  //     if (
  //       value.includes(separator) ||
  //       value.includes('"') ||
  //       value.includes("\n") ||
  //       value.includes("\r")
  //     ) {
  //       value = `"${value.replace(/"/g, '""')}"`;
  //     }
  //     csv += value;
  //     if (j !== data[i].length - 1) {
  //       csv += separator;
  //     }
  //   }
  //   if (i !== data.length - 1) {
  //     csv += "\n";
  //   }
  // }
  data.map(item => {
    if (!Array.isArray(item)) throw new Error("Unexpected value");
    item.map(item2 => {
      if (typeof item2 !== "string" && typeof item2 !== "number")
        throw new Error("Unexpected value");
      let value = String(item2);
      if (value.includes('"') || value.includes("\n") || value.includes(",")) {
        value = `"${value.replace(/"/g, '""')}"`;
      }
      result += value;
      if (item2) {
        result += ",";
      }
    });
    if (item) {
      result += "\n";
    }
  });
  return (
    result.slice(0, result.indexOf("\n") - 1) +
    result.slice(result.indexOf("\n"), -2)
  );
}

let arr = [[1, 2], ["a,b", "c,d"]];

// console.log(arr[1].join("").includes(","));

console.log(arrayToCsv(arr)); // 1,2\n"a,b","c,d"

export { arrayToCsv };
// Для запуска теста вводим в терминале команду: npm run test:current -- csvGenerator.test.js
