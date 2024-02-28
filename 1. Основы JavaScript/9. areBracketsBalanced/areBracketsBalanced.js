const areBracketsBalanced = str => {
  // Пишите код здесь
  let bracket = {
    ")": "("
  };

  let oneBracket = str.split("");

  for (let i = 0; i <= oneBracket.length; i++) {
    if (oneBracket.includes("(") || oneBracket.includes(")")) {
      break;
    }
    return true;
  }

  for (let i = oneBracket.length - 1; i > 0; i--) {
    if (bracket[oneBracket[i]] === oneBracket[i - 1]) {
      oneBracket.splice(i - 1, 2);
    }
  }

  return oneBracket.length === 0;
};

console.log(areBracketsBalanced("(() ( ())) ) ("));

export { areBracketsBalanced };
// Для запуска теста вводим в терминале команду: npm run test:current -- areBracketsBalanced.test.js
