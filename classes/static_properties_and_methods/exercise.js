// As we know, all objects normally inherit from Object.prototype
// and get access to “generic” object methods like hasOwnProperty etc.

// For instance:

// class Rabbit {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit("Rab");

// // hasOwnProperty method is from Object.prototype
// alert( rabbit.hasOwnProperty('name') ); // true

// But if we spell it out explicitly like "class Rabbit extends Object",
// then the result would be different from a simple "class Rabbit"?

// What’s the difference?

// Here’s an example of such code (it doesn’t work – why? fix it?):

// class Rabbit extends Object {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit("Rab");

// alert(rabbit.hasOwnProperty("name")); // Error

// Solution:
// When we extends from another class and we overwrite the constructor
// It's necessary call the constructor method of the parent class

class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");
window.alert(rabbit.hasOwnProperty("name"));
