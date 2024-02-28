const calculatePrice = orders => {
  // Пишите код здесь
  if (!!orders === false || Array.isArray(orders) === false) {
    return 0;
  } else {
    let prices = orders.map(item => item.price);
    return prices.reduce((sum, item) => {
      return sum + item;
    }, 0);
  }
};

const data = [
  {
    type: "food",
    price: 130
  },
  {
    type: "clothes",
    price: 7300
  },
  {
    type: "other",
    price: 1400
  }
];

console.log(calculatePrice(data));

export { calculatePrice };
// Для запуска теста вводим в терминале команду: npm run test:current -- calculatePrice.test.js
