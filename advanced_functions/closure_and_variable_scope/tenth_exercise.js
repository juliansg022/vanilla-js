// The following code creates an array of shooters.

// Every function is meant to output its number. But something is wrong…

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let k = i;
    let shooter = function () { // jshint ignore:line
      // create a shooter function,
      window.alert(k); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.
// Why do all of the shooters show the same value?

// Fix the code so that they work as intended.

// The function was invoking "i" which was declared before the loop,
// So when shooter function was inkoved, it called "i" with its
// last value. So declaring a value to save the current i value
// within the loop and calling that within the function
