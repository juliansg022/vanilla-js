// The function makeWorker below makes another function and returns it.
// That new function can be called from somewhere else.

// Will it have access to the outer variables from its creation place,
// or the invocation place, or both?

function makeWorker() {
  let name = "Pete";

  return function () {
    window.alert(name);
  };
}

let name = "John"; // jshint ignore:line

// create a function
let work = makeWorker();

// call it
work(); // what will it show?
// Which value it will show? “Pete” or “John”?

// The function eventually has access to the outer variable
// but when a variable with the same name is declared
// into its scope, so it will take that.
// It will show "Pete"
