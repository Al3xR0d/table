function incrementCounter(counterName) {
  // Пишите код здесь
  let counter;

  try {
    counter = JSON.parse(localStorage.getItem("counters"));
  } catch (err) {
    counter = {};
  }
  if (typeof counter[counterName] !== "number") {
    counter[counterName] = 0;
  }
  counter[counterName]++;
  localStorage.setItem("counters", JSON.stringify(counter));

  return counter[counterName];
}

export { incrementCounter };
// Для запуска теста вводим в терминале команду: npm run test:current -- incrementCounter.test.js
