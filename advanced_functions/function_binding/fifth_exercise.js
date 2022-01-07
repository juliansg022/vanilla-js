// The task is a little more complex variant of Fix
// a function that loses "this".

// The user object was modified. Now instead of two functions
// loginOk/loginFail, it has a single function user.login(true/false).

// What should we pass askPassword in the code below, so that it calls
//  user.login(true) as ok and user.login(false) as fail?

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  login(result) {
    alert(this.name + (result ? " logged in" : " failed to log in"));
  },
};

askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?

// In this case, we must to send the login function
// to ok "user.login(true)" and to fail "user.login(false)"
// but binding the object, so we send "user" as first parameter
// to give the context and "true" to ok and "false" to fail
// as second parameter, which will be "result"