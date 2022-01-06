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

function powerSum(X, N) {
  // Write your code here
  let limit = parseInt(Math.pow(X, 1 / N));
  let root = Math.pow(X, 1 / N);
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

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const X = parseInt(readLine().trim(), 10);

  const N = parseInt(readLine().trim(), 10);

  const result = powerSum(X, N);

  ws.write(result + "\n");

  ws.end();
}
