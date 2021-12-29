let name = "Ilya";

alert(`Hello ${1}`); // Displays "Hello 1". Solve the operation into ${}.

alert(`Hello ${"name"}`); // Displays "Hello name". In ${} a string "name" is invoked, not the variable "name".

alert(`Hello ${name}`); // Displays "Hello Ilya", In ${} is invoked the variable "name".
