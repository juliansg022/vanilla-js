// Write the function isEmpty(obj) which returns true
// if the object has no properties, false otherwise.

// Should work like that:

let schedule = {};

window.alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

window.alert(isEmpty(schedule)); // false

function isEmpty(object) {
  let empty = true;
  for (let key in object) {
    window.console.log(`The first key found was ${key}`);
    empty = false;
    break;
  }
  return empty;
}
