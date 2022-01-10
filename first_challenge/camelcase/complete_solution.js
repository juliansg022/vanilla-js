/*
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function camelcase(s) {
  let words = [];
  let currentWord = "";
  for (let i = 0; i < s.length; i++) {
    currentWord += s[i];

    if (
      s[i + 1] == undefined ||
      (s.charCodeAt(i + 1) >= 65 && s.charCodeAt(i + 1) <= 90)
    ) {
      words.push(currentWord);
      currentWord = "";
    }
  }
  return words.length;
}

camelcase("saveChangesInTheEditor");
