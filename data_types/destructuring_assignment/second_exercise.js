// There is a salaries object:

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

// Create the function topSalary(salaries) that returns the name of the top-paid person.

// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.

function topSalary(object) {
  let bestSalary = 0;
  let answer = null;
  for (let [key, value] of Object.entries(object)) {
    if (value > bestSalary) {
      bestSalary = value;
      answer = key;
    }
  }
  return answer;
}

alert(topSalary(salaries));
