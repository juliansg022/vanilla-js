// Here a counter object is made with the help of the constructor function.

// Will it work? What will it show?

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

window.alert(counter.up()); // ? This will show "1"
window.alert(counter.up()); // ? This will show "2"
window.alert(counter.down()); // ? This will show "1"

// When the object "counter" was created
// starts with "count = 0", this "count" variable
// is owned by "counter" not the function.
// So for each object that is created with the constructor.
// its own variable "count" will be created.
