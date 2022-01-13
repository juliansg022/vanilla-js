// Rewrite this if using the conditional operator '?':

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let a = window.prompt("Type a number");
let b = window.prompt("Type another number");

let result = a + b < 4 ? "Below" : "Over";

window.alert(result);
