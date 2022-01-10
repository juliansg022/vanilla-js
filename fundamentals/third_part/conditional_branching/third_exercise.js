// Using if..else, write the code which gets a number via prompt and then shows in window.alert:

// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.

let receivedNumber = window.prompt("Write an number please");

if (receivedNumber > 1) {
  window.alert(1);
} else if (receivedNumber < 0) {
  window.alert(-1);
} else {
  window.alert(0);
}
