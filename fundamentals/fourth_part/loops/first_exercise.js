// What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  alert(i--);
}

// The last value displayed is "1", because when "1" is displayed,
// decrement is performed, now "i" is equal to "0",
// and then it is evaluated in the while statement, but "0" is false.
// so it doesn't enter the loop again.
