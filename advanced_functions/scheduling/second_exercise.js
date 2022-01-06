// In the code below there’s a setTimeout call scheduled,
// then a heavy calculation is run, that takes more than 100ms to finish.

// When will the scheduled function run?

// (1) After the loop.
// (2) Before the loop.
// (3) In the beginning of the loop.

// What is alert going to show?

let i = 0;

setTimeout(() => alert(i), 100); // ?

// assume that the time to execute this function is >100ms
for (let j = 0; j < 100000000; j++) {
  i++;
}

// It's programmed execute the alert before 100ms
// but before the current script must complete it.
// So. First does the loop and after it executes
// the alert showing "100000000" because i is 1 up to j.
// j ends with a value of 99999999 and i ends with a value
// of 100000000
