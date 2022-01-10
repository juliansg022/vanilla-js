// Look at the code. What will be the result of the call at the last line?

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() { // jshint ignore:line
    window.alert(`${phrase}, ${user}`);
  }
}

sayHi(); // This will show an error

// The function only exists within the if block
