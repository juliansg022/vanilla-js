/*
 * Complete the 'powerSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER X
 *  2. INTEGER N
 */

function powerSum(X, N) {
  // Write your code here
  let limit = parseInt(Math.pow(X, 1 / N));
  let ways = 0;

  let evaluators = [];
  for (let i = 1; i <= limit; i++) {
    evaluators.push(Math.pow(i, N));
  }

  for (let i = Math.pow(2, limit) - 1; i >= 0; i--) {
    let temporal = 0;
    for (let j = limit - 1; j >= 0; j--) {
      if (temporal > X) {
        break;
      } else {
        temporal += i & Math.pow(2, j) ? evaluators[j] : 0;
      }
    }

    if (temporal == X) {
      ways++;
    }
  }
  return ways;
}

powerSum(10, 2);
powerSum(100, 2);
powerSum(100, 3);
powerSum(800, 2);