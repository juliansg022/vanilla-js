// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// window.alert(sorted); // CSS, HTML, JavaScript
// window.alert(arr); // HTML, JavaScript, CSS (no changes)

function copySorted(array) {
  let answer = array.slice(0, array.length);
  return answer.sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

window.alert(sorted); // CSS, HTML, JavaScript
window.alert(arr); // HTML, JavaScript, CSS (no changes)