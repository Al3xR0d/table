const fileSizes = {
  testFile1: 65,
  testFile2: 48
};

function getFileSize(filename, cb) {
  setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);
}

function sumFileSizes(filename1, filename2, cb) {
  // Пишите код здесь
  let result;


  getFileSize(filename1, size => {
    if (size === undefined) {
      cb(undefined, new Error("not found"));
    } else if (result) {
      cb(result + size);
    } else {
      result = size;
    }
  });
  getFileSize(filename2, size => {
    if (size === undefined) {
      cb(undefined, new Error("not found"));
    } else if (result) {
      cb(result + size);
    } else {
      result = size;
    }
  });

}


export { getFileSize, sumFileSizes, fileSizes };
// Для запуска теста вводим в терминале команду: npm run test:current -- sumFileSizes.test.js
