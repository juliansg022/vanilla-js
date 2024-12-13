/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
  return ar.reduce((total, element) => (total += element), 0);
}

simpleArraySum([1, 2, 3, 4, 10, 11]);
