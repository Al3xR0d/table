import { getUsersInfo } from "./getUsersInfo";
import * as db from "./db";

jest.mock("./db", () => ({
  getUsersIds: jest.fn(),
  getUserInfo: jest.fn(),
}));

describe("getUsersInfo", () => {
  beforeEach(() => {
    db.getUsersIds.mockImplementation((callback) => {
      setTimeout(() => callback(["id1", "id2"]), 100);
    });

    db.getUserInfo.mockImplementation((id, callback) => {
      const users = {
        id1: { name: "Alex", age: 70 },
        id2: { name: "Elon" },
      };
      setTimeout(() => callback(users[id]), 100);
    });
  });

  it("Должен запрашивать пользователей по ids", (done) => {
    getUsersInfo((users) => {
      expect(users).toEqual([{ name: "Alex", age: 70 }, { name: "Elon" }]);
      expect(db.getUsersIds).toHaveBeenCalledTimes(1);
      expect(db.getUserInfo).toHaveBeenCalledTimes(2);
      done();
    });
  });
})
