// Which of these window.alerts are going to execute?

// What will the results of the expressions be inside if(...)?

if (-1 || 0) window.alert("first"); // Will be executed. The expression result is "-1", meaning "true", and displays "first"

if (-1 && 0) window.alert("second"); // Won't be executed. The expression result is "0", meaning "false"

if (null || -1 && 1) window.alert("third"); // Will be executed. The expression result is "1", meaning "true", and displays "third"
