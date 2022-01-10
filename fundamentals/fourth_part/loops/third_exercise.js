// For each loop write down which values it is going to show. Then compare with the answer.

// Both loops window.alert same values or not?

// (1) The prefix form
for (let i = 0; i < 5; i++) window.alert(i);

// (2) The postfix form i++
for (let i = 0; i < 5; ++i) window.alert(i);

// Both loops Start displaying from 0 to 4. First does the comparison, executes the window.alert
// (displaying the value) and does the increment to do the comparison again.
// To this case increment "i" as "i++" or "++i" is equal. The loop has a clear structure to
// execute.
// In the first time assigns the value "0" to "i" to start.
// After asks the condition (i < 5). If the result is "true" so
// execute the code into de loop, and when ends does the increment to "i"
