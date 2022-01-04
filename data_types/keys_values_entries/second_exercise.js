// Write a function count(obj) that returns the number of properties in the object:

let user = {
  name: "John",
  age: 30,
};

alert(count(user)); // 2
// Try to make the code as short as possible.

// P.S. Ignore symbolic properties, count only “regular” ones.

function count(object) {
  return Object.keys(object).reduce((answer, user) => {
    if (typeof user != "symbol") {
      answer++;
    }
    return answer;
  }, 0);
}
