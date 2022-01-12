jest.mock("../request");

import * as user from "../user";

// Testing for async errors using Promise.catch.
it("tests error with promises", () => {
  expect.assertions(1);
  return user.getUserName(2).catch((e) =>
    expect(e).toEqual({
      error: "User with 2 not found.",
    })
  );
});

// Or using async/await.
it("tests error with async/await", async () => {
  expect.assertions(1);
  try {
    await user.getUserName(1);
  } catch (e) {
    expect(e).toEqual({
      error: "User with 1 not found.",
    });
  }
});
