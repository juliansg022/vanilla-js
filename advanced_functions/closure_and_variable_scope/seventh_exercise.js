// What will be the result of this code?

let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();
// P.S. There’s a pitfall in this task. The solution is not obvious.

// It'll show an error because declaring the function
// it doesn't have access to the external scope.
// And in its own scope the variable first is called
// before to be declared