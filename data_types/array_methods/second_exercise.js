// Write a function filterRange(arr, a, b) that gets an array arr,
// looks for elements with values higher or equal to a and lower
// or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// window.alert(filtered); // 3,1 (matching values)

// window.alert(arr); // 5,3,8,1 (not modified)

function filterRange(array, bottom, top) {
  return array.filter((item) => item >= bottom && item <= top);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

window.alert(filtered); // 3,1 (matching values)

window.alert(arr); // 5,3,8,1 (not modified)
