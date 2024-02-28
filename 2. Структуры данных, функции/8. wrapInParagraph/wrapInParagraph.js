function wrapInParagraph(text) {
  // Пишите код здесь
  // let arrText = text.split("\n");
  // let newText = [];
  // for (let i = 0; i < arrText.length; i++) {
  //   newText += "<p>" + arrText[i] + "</p>" + "\n";
  // }
  // return newText.trimEnd();

  // let arrText = text.split("\n");
  // let newText = [];
  // for (let i = 0; i < arrText.length; i++) {
  //   newText += arrText.splice(i, 1, "<p>" + arrText[i] + "</p>" + "\n");
  // }
  // return arrText.join("").trimEnd();

  // let arrText = text.split("\n");
  // let newText = arrText.map(function(item, index, array) {
  //   return "<p>" + item + "</p>" + "\n";
  // });
  // return newText.join("").trimEnd();

  let arrText = text.split("\n");
  return arrText.map(item => "<p>" + item + "</p>" + "\n").join("").trimEnd();
}

const text = `Some
simple multiline
text`;

console.log(wrapInParagraph(text));

module.exports = wrapInParagraph;

// Для запуска теста вводим в терминале команду: npm run test:current -- wrapInParagraph.test.js
