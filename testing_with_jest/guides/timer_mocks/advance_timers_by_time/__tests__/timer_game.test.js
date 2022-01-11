"use strict";

afterEach(() => {
  jest.useRealTimers();
});

test("calls the callback after 1 second via advanceTimersByTime", () => {
  jest.useFakeTimers();
  jest.spyOn(global, "setTimeout");
  const timerGame = require("../timer_game");
  const callback = jest.fn();

  timerGame(callback);

  // At this point in time, the callback should not have been called yet
  expect(callback).not.toBeCalled();

  // Fast-forward until all timers have been executed
  jest.advanceTimersByTime(1000);

  // Now our callback should have been called!
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});
