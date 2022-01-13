// Write the code which asks for a login with window.prompt.

// If the visitor enters "Admin", then window.prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”
// The schema: "The las gaphic in the website: https://javascript.info/logical-operators"

// Please use nested if blocks. Mind the overall readability of the code.

// Hint: passing an empty input to a window.prompt returns an empty string ''. Pressing ESC during a window.prompt returns null.

let userType = window.prompt("¿Who's there?");

if (userType == "Admin") {
  let userPassword = window.prompt("¿What's the password?");

  if (userPassword == "TheMaster") {
    window.alert("Welcome!");
  } else if (userPassword == null || userPassword == "") {
    window.alert("Canceled");
  } else {
    window.alert("Wrong password");
  }
} else if (userType == null || userType == "") {
  window.alert("Canceled");
} else {
  window.alert("I don't know you");
}
