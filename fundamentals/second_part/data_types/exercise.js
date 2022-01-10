let userName = "Ilya";

window.alert(`Hello ${1}`); // Displays "Hello 1". Solve the operation into ${}.

window.alert(`Hello ${"name"}`); // Displays "Hello name". In ${} a string "name" is invoked, not the variable "name".

window.alert(`Hello ${userName}`); // Displays "Hello Ilya", In ${} is invoked the variable "name".
