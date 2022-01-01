// We’ve got a Clock class. As of now, it prints the time every second.

// Create a new class ExtendedClock that inherits from Clock and adds the parameter precision – the number of ms between “ticks”. Should be 1000 (1 second) by default.

// Your code should be in the file extended-clock.js
// Don’t modify the original clock.js. Extend it.

let clock = new ExtendedClock({ template: "h:m:s" });
clock.start();
