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

minimumNumber(3, "Ab1");
minimumNumber(11, "#HackerRank");
