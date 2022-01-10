// Rewrite if..else using multiple ternary operators '?'.

// For readability, it’s recommended to split the code into multiple lines.

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let login = window.prompt("Who are you?");

let message = (login == "Employee") ? "Hello" :
    (login == "Director") ? "Greettings" :
    (login == "") ? "No login" :
    "";

window.alert(message);