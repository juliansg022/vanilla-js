// We have an object:

let user = {
  name: "John",
  years: 30,
};
// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false, if no such property)
// Here’s an example of the values after your assignment:

// let user = { name: "John", years: 30 };

// your code to the left side:
let { name: userName, years: age, isAdmin = false } = user;

window.alert(userName); // John
window.alert(age); // 30
window.alert(isAdmin); // false
