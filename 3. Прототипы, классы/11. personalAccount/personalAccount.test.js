import { Person, Account } from "./personalAccount";

describe("bank-account", () => {
  let person;
  let account;

  beforeEach(() => {
    person = new Person("Test", "User", "1990-01-01");
    account = new Account(person, 1000);
  });

  it("Проверка ввода/вывода средств", () => {
    account.addMoney(500, "Deposit");
    expect(account.getAmount()).toBe(1500);
    account.withdrawMoney(200, "Withdrawal");
    expect(account.getAmount()).toBe(1300);
  });

  it("Проверка перевода", () => {
    const recipientPerson = new Person("Recipient", "User", "1992-02-02");
    const recipientAccount = new Account(recipientPerson, 500);
    Account.transfer(account, recipientAccount, 300);
    expect(account.getAmount()).toBe(700);
    expect(recipientAccount.getAmount()).toBe(800);
  });

  it("Проверка fullName", () => {
    expect(person.fullName).toBe("Test User");
  });

  it("Проверка расчета возраста (если бы сегодня было 2023-05-23)", () => {
    const realDateNow = Date.now.bind(global.Date);
    const dateNowStub = jest.fn(() => new Date("2023-05-23").getTime());
    global.Date.now = dateNowStub;

    expect(person.getAge()).toBe(33);

    global.Date.now = realDateNow;
  });
});
