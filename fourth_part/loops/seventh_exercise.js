// An integer number greater than 1 is called a prime if it
// cannot be divided without a remainder by anything except 1 and itself.
// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
// Write the code which outputs prime numbers in the interval from 2 to n.
// For n = 10 the result will be 2,3,5,7.
// P.S. The code should work for any n, not be hard-tuned for any fixed value.

let limit = prompt("Write a number please", 10);

for (let i = 2; i <= limit; i++) {
  if (i == 2) {
    alert(i);
    continue;
  } else {
    if (i % 2 != 0) {
      let j = i - 1;
      let primeIndicator = true;

      while (j > 2) {
        if (i % j == 0) {
          primeIndicator = false;
          break;
        }

        j--;
      }
      if (primeIndicator) {
        alert(i);
      }
    }
  }
}
