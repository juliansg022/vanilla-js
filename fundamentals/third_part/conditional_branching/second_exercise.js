// Using the if..else construct, write the code which asks:
// ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”,
// otherwise – output: “You don’t know? ECMAScript!”

let answer = window.prompt('What is the "official" name of JavaScript?');

if (answer == "ECMAScript") {
  window.alert("Right!");
} else {
  window.alert("You don't know? ECMAScript!");
}
