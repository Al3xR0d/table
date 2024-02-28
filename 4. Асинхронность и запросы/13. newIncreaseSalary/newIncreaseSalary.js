async function newIncreaseSalary() {
  // Пишите код здесь
  try {
    let employees = await api.getEmployees();
    let arrSalary = employees.map(item => item.salary);
    let averageSalary =
      arrSalary.reduce((acc, item) => {
        acc += item;
        return acc;
      }, 0) / arrSalary.length;
    let sumSalary = 0;
    let counter = 0;
    for (let item of employees) {
      let newSalary;
      if (item.salary > averageSalary) {
        newSalary = item.salary * 1.1;
        // sumSalary += newSalary;
      } else {
        newSalary = item.salary * 1.2;
        // sumSalary += newSalary;
      }
      sumSalary += newSalary;
      await api.setEmployeeSalary(item.id, newSalary);
      await api.notifyEmployee(
        item.id,
        `Привет, ${item.name}! Поздравляем, твоя новая зарплата = ${newSalary}!`
      );
      counter++;
    }
    await api.sendBudgetToAccounting(sumSalary);
    return counter;
  } catch (error) {
    await api.notifyAdmin(error);
    // return counter;
  }
}

const api = {
  _employees: [
    { id: 1, name: "Alex", salary: 120000 },
    { id: 2, name: "Fred", salary: 110000 },
    { id: 3, name: "Bob", salary: 80000 }
  ],

  getEmployees() {
    return new Promise(resolve => {
      resolve(this._employees.slice());
    });
  },

  setEmployeeSalary(employeeId, newSalary) {
    return new Promise(resolve => {
      const updatedEmployees = this._employees.map(
        employee =>
          employee.id !== employeeId
            ? employee
            : {
                ...employee,
                salary: newSalary
              }
      );
      this._employees = updatedEmployees;
      resolve(this._employees.find(({ id }) => id === employeeId));
    });
  },

  notifyEmployee(employeeId, text) {
    return new Promise(resolve => {
      resolve(true);
    });
  },

  notifyAdmin(error) {
    return new Promise(resolve => {
      resolve();
    });
  },

  setEmployees(newEmployees) {
    return new Promise(resolve => {
      this._employees = newEmployees;
      resolve();
    });
  },

  sendBudgetToAccounting(newBudget) {
    return new Promise(resolve => {
      resolve();
    });
  }
};

export { newIncreaseSalary, api };
// Для запуска теста вводим в терминале команду: npm run test:current -- newIncreaseSalary.test.js
