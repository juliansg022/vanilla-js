// Here we make two counters: counter and counter2 using the same makeCounter function.

// Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

// When the function is assigned to each variable
// the function is initialized.
// In other words, create the function "counter" and "counter2"
// with the same body that the original function when was declared

alert(counter2()); // ? This will show "0"
alert(counter2()); // ? This will show "1"
