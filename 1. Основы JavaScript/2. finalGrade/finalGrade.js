function finalGrade(exam, projects) {
  // Пишите код здесь
  if (exam > 90 || projects > 10) {
    return 100;
  }
  else if (exam > 75 && projects >= 5) {
    return 90;
  }
  else if (exam > 50 && projects >= 2) {
    return 75;
  }
    return 0;
}

export { finalGrade };
// Для запуска теста вводим в терминале команду: npm run test:current -- finalGrade.test.js
