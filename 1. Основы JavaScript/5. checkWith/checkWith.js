const checkWith = (value, checkFunc) => {
  // Пишите код здесь

  // if (Boolean(checkFunc(value)) == true) {
  //   return true
  // }
  // else {
  //   return false
  // }

  return !!checkFunc(value)
//  else {
//     return false
//  }
 
 
};

console.log(checkWith(10, n => n - 10))

let a = n => n - 10;
console.log(Boolean(a(10)))

export { checkWith };
// Для запуска теста вводим в терминале команду: npm run test:current -- checkWith.test.js
