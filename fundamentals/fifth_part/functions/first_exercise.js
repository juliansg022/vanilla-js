// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return window.confirm("Did parents allow you?");
  }
}

// Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return window.confirm("Did parents allow you?");
}

let myAge = window.prompt("How old are you?", 18);

checkAge(myAge);

// Have the same behavior. When a "return" is executed, the function is aborted (ended).
