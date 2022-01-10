// Write the code using if..else which would correspond to the following switch:

// switch (browser) {
//   case "Edge":
//     window.alert("You've got the Edge!");
//     break;

//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     window.alert("Okay we support these browsers too");
//     break;

//   default:
//     window.alert("We hope that this page looks ok!");
// }

let browser = window.prompt("¿What's your current browser?");

if (browser == "Edge") {
  window.alert("You've got the Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  window.alert("Okay we support these browsers too");
} else {
  window.alert("We hope that this page looks ok!");
}
