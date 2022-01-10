// What will the result be?

window.alert(null || 2 && 3 || 4); // Displays "3".

// First evaluate the AND statement, save the 3 as result of "2 && 3".
// "&&" returns the last true value if doesn't find a false value.
// After evaluate the OR statement and returns the first true value.
// In this case the first true value is "3"
