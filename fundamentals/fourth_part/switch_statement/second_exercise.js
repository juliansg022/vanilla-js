// Rewrite the code below using a single switch statement:

// let a = +window.prompt("a?", "");

// if (a == 0) {
//   window.alert(0);
// }
// if (a == 1) {
//   window.alert(1);
// }

// if (a == 2 || a == 3) {
//   window.alert("2,3");
// }

let a = +window.prompt("a?", "");

switch (a) {
  case 0:
    window.alert(0);
    break;

  case 1:
    window.alert(1);
    break;

  case 2:
  case 3:
    window.alert("2,3");
    break;
}
