// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”
// The schema: "The las gaphic in the website: https://javascript.info/logical-operators"

// Please use nested if blocks. Mind the overall readability of the code.

// Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null.

let userType = prompt("¿Who's there?");

if (userType == "Admin") {
  let userPassword = prompt("¿What's the password?");

  if (userPassword == "TheMaster") {
    alert("Welcome!");
  } else if (userPassword == null || userPassword == "") {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userType == null || userType == "") {
  alert("Canceled");
} else {
  alert("I don't know you");
}
