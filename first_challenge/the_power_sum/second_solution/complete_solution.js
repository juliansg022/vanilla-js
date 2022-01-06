"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

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

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const X = parseInt(readLine().trim(), 10);

  const N = parseInt(readLine().trim(), 10);

  const result = powerSum(X, N);

  ws.write(result + "\n");

  ws.end();
}
