// Is it possible to create functions A and B so that new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A;
// let b = new B;

// alert( a == b ); // true
// If it is, then provide an example of their code.

// Yeah, that's possible. Defining a external object and returning it

let object = { name: "Thomas", age: "18" };

function A() {
  return object;
}

function B() {
  return object;
}

let a = new A();
let b = new B();

alert(a == b); // true
