// Write a function printNumbers(from, to) that outputs a
// number every second, starting from from and ending with to.

// Make two variants of the solution.

// (1) Using setInterval.
// (2) Using nested setTimeout.

function printNumbers(from, to) {
  let current = from;

  setInterval(function () {
    if (current <= to) {
      alert(current);
    } else {
      clearInterval();
    }
    current++;
  }, 1000);
}

function printNumbers(from, to) {
  let current = from;

  setTimeout(function print() {
    if (current <= to) {
      alert(current);
      setTimeout(print, 1000);
    } else {
      clearTimeout();
    }
    current++;
  });
}
