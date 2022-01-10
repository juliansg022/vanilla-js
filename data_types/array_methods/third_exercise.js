// Write a function filterRangeInPlace(arr, a, b) that gets
// an array arr and removes from it all values except those
// that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// window.alert(arr); // [3, 1]

function filterRangeInPlace(array, bottom, top) {
  for (let j = 0; j < array.length; j++) {
    if (array[j] < bottom || array[j] > top) {
      array.splice(j, 1);
      j--;
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

window.alert(arr); // [3, 1]
