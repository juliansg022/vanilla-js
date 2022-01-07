// What will be the output?

function f() {
  alert(this); // ?
}

let user = {
  g: f.bind(null),
};

user.g();

// In this case the passed context is null
// so the function is blinding with this = null
