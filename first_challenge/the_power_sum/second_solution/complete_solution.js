/*
 * Complete the 'powerSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER X
 *  2. INTEGER N
 */

function subPower(X, N) {
  if (N == 0) return 1;
  else if (N % 2 == 0)
    return subPower(X, parseInt(N / 2)) * subPower(X, parseInt(N / 2));
  else return X * subPower(X, parseInt(N / 2)) * subPower(X, parseInt(N / 2));
}

function powerSum(X, N, currentX = 1, accumulated = 0) {
  let ways = 0;
  let invokedResult = subPower(currentX, N);

  while (invokedResult + accumulated < X) {
    ways += powerSum(X, N, currentX + 1, invokedResult + accumulated);
    currentX++;
    invokedResult = subPower(currentX, N);
  }

  if (invokedResult + accumulated == X) ways++;

  return ways;
}

powerSum(10, 2);
powerSum(100, 2);
powerSum(100, 3);
powerSum(800, 2);