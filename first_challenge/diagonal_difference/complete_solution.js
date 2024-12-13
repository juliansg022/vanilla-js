/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here
  let main = 0;
  let secundary = 0;
  for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
    main += arr[i][i];
    secundary += arr[i][j];
  }

  return Math.abs(main - secundary);
}

diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);