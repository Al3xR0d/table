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

  // if (typeof filename1 === "undefined" || typeof filename2 === "undefined") {
  //   throw new Error("not found");
  // }
  // try {
  getFileSize(filename1, size => {
    if (size === undefined) {
      cb(undefined, new Error("not found"));
      // return;
    } else result ? cb(result + size) : (result = size);
  });
  getFileSize(filename2, size => {
    if (size === undefined) {
      cb(undefined, new Error("not found"));
      // return;
    } else result ? cb(result + size) : (result = size);
  });
  // } catch (err) {
  //   throw new NotFoundError("not found");
  // }
}

// class NotFoundError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "NotFoundError";
//   }
// }

export { getFileSize, sumFileSizes, fileSizes };
// Для запуска теста вводим в терминале команду: npm run test:current -- sumFileSizes.test.js

// let a = 0;
// let timer = setInterval(() => console.log(a++), 2000);

// setTimeout(() => {
//   console.log("End");
//   clearInterval(timer);
// }, 5000);

// console.log(timer);

// let timer = setTimeout(function tick() {
//   console.log(a++);
//   timer = setTimeout(tick, 500);
// }, 5000);

// console.log(a);
