function deepEqual(obj1, obj2) {
  // Пишите код здесь
  // if (JSON.stringify(obj1) === JSON.stringify(obj2)) return true;
  // return false;
  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  )
    return obj1 === obj2;

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  // console.log(keys1);
  // console.log(keys2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  return keys1.every(
    key => keys2.includes(key) && deepEqual(obj1[key], obj2[key])
  );
}

const firstObject = {
  name: "Misha",
  order: {
    price: 20,
    count: 1,
    taxes: { vat: { name: "vat", amount: { uah: 10, usd: 0.37 } } },
    total: {
      withoutTaxes: { uah: 20, usd: 0.74 },
      withTaxes: { vat: { uah: 30, usd: 1.11 } }
    }
  }
};

const secondObject = {
  name: "Misha",
  order: {
    price: 20,
    count: 1,
    taxes: { vat: { name: "vat", amount: { uah: 10, usd: 0.37 } } },
    total: {
      withoutTaxes: { uah: 20, usd: 0.74 },
      withTaxes: { vat: { uah: 30, usd: 1.11, eur: null } }
    }
  }
};

console.log(deepEqual(firstObject, secondObject));

export { deepEqual };
// Для запуска теста вводим в терминале команду: npm run test:current -- deepEqual.test.js

const obj = {
  name: "Misha",
  order: {
    price: 20,
    count: 1,
    taxes: { vat: { name: "vat", amount: { uah: 10, usd: 0.37 } } },
    total: {
      withoutTaxes: { uah: 20, usd: 0.74 },
      withTaxes: { vat: { uah: 30, usd: 1.11 } }
    }
  }
};

const obj2 = {
  name: "Misha",
  order: {
    price: 20,
    count: 1,
    taxes: { vat: { name: "vat", amount: { uah: 10, usd: 0.37 } } },
    total: {
      withoutTaxes: { uah: 20, usd: 0.74 },
      withTaxes: { vat: { uah: 30, usd: 1.11 } }
    }
  }
};

console.log(Object.keys(obj2));
