// Can we change this by additional binding?

// What will be the output?

function f() {
  alert(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Ann" });

f(); // It will show "John"

// A function cannot bound again.
// Only the first binding will be recognized.
