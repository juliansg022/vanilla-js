// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// }

// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:

// Using a question mark operator ?
// Using OR ||

function checkAgeV1(age) {
  return age > 18 ? true : window.confirm("Did you parents allow you?");
}

function checkAgeV2(age) {
  return age > 18 || window.confirm("Did you parents allow you?");
}

let currentAge = window.prompt("What's your age?");

let answerV1 = checkAgeV1(currentAge);
let answerV2 = checkAgeV2(currentAge);

window.alert(`The value saved in the V1 is ${answerV1}`);
window.alert(`The value saved in the V2 is ${answerV2}`);
