// Can we change this by additional binding?

// What will be the output?

function f() {
  window.alert(this.name);
}

let g = f.bind({ name: "John" }).bind({ name: "Ann" });

g(); // It will show "John"

// A function cannot bound again.
// Only the first binding will be recognized.
