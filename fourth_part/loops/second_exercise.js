// For every loop iteration, write down which value it outputs and then compare it with the solution.

// Both loops alert the same values, or not?

// (1) The prefix form ++i
let i = 0;
while (++i < 5) alert(i);
// Start displaying from 1 to 4. First does the increment before do the comparison
// So when "i" comes to while sentence in "0", it increments now its value is "1",
// and the alert displays the same value

// (2) The postfix form i++
let j = 0;
while (j++ < 5) alert(j);
// Start displaying from 1 to 5. First does the comparison and after does the increment.
// So when "j" in the while sentence is evaluated, for example, in "2", the alert displays "3".
