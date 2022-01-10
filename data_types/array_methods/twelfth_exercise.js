// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

window.alert(unique(strings)); // Hare, Krishna, :-O

function unique(array) {
  let answer = [];

  array.forEach((element) => {
    if (!answer.includes(element)) {
      answer.push(element);
    }
  });

  return answer;
}
