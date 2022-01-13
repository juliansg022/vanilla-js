// There’s a value in the property of a function.
// Will it change after bind? Why, or why not?

function sayHi() {
  window.alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John",
});

window.alert(bound.test); // what will be the output? why?

// "this" will be { name: "John"}. So
// when the bind is called with that argument
// test won't exist, only the property "name"
// will be present.

// When "bound.test" is called, it will show
// "undefined" because the property doesn't exist
// in the context with which "bound" was created.
