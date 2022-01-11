jest.mock("../request");

import * as user from "../user";

// Testing for async errors using `.rejects`.
it("tests error with rejects", () => {
  expect.assertions(1);
  return expect(user.getUserName(3)).rejects.toEqual({
    error: "User with 3 not found.",
  });
});

// Or using async/await with `.rejects`.
it("tests error with async/await and rejects", async () => {
  expect.assertions(1);
  await expect(user.getUserName(3)).rejects.toEqual({
    error: "User with 3 not found.",
  });
});
