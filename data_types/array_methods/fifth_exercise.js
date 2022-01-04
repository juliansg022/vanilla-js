// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert(sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (no changes)

function copySorted(array) {
  let answer = array.slice(0, array.length);
  return answer.sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (no changes)