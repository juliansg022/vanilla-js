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
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let lower_case = /[a-z]/;
  let upper_case = /[A-Z]/;
  let numbers = /[0-9]/;
  let special_characters = /[-+!@#$%^&*()]/;

  let missing_characters = 0;

  missing_characters += password.match(lower_case) === null ? 1 : 0;
  missing_characters += password.match(upper_case) === null ? 1 : 0;
  missing_characters += password.match(numbers) === null ? 1 : 0;
  missing_characters += password.match(special_characters) === null ? 1 : 0;

  if (n >= 6 || missing_characters > 6 - n) {
    return missing_characters;
  } else {
    return 6 - n;
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const password = readLine();

  const answer = minimumNumber(n, password);

  ws.write(answer + "\n");

  ws.end();
}
