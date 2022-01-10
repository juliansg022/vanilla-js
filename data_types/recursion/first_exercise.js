// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// For instance:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Make 3 solution variants:

// Using a for loop.
// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// Using the arithmetic progression formula.
// An example of the result:

function sumToWithForLoop(n) {
  let sum = 1;
  for (let i = n; i > 1; i--) {
    sum += i;
  }
  return sum;
}

function sumToWithRecursion(n) {
  if (n == 1) {
    return 1;
  } else {
    return sumToWithRecursion(n - 1) + n;
  }
}

function sumToWithFormula(n) {
  return (n * (1 + n)) / 2;
}

window.alert(sumToWithForLoop(100)); // 5050
window.alert(sumToWithRecursion(100)); // 5050
window.alert(sumToWithFormula(100)); // 5050

// P.S. Which solution variant is the fastest? The slowest? Why?
// The fastest solution is the builded with the arithmetic progression formula
// because only needs a calcule to find the answer. So to calculate the count of 100000
// is necessary to execute an only simple math expression.

// The slowest solution is the builded with the for loop because needs
// to interate in each number from n until 1. So to calculate the count of 100000
// is necessary to do 100000 interations.

// P.P.S. Can we use recursion to count sumTo(100000)? No, when the recursion
// method is called with "100000" displays an error: Uncaught RangeError:
// Maximum call stack size exceeded
