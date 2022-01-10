// The call to askPassword() in the code below should check the
// password and then call user.loginOk/loginFail depending on the answer.

// But it leads to an error. Why?

// This occurs because "askPassword" is calling
// the functions "ok" and "fail" but without
// its context, so "this" will be "undefined"

// Fix the highlighted line for everything to start working right
// (other lines are not to be changed).

function askPassword(ok, fail) {
  let password = window.prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  loginOk() {
    window.alert(`${this.name} logged in`);
  },

  loginFail() {
    window.alert(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// To solve it is necessary to bind the function sending
// the object complete object as context