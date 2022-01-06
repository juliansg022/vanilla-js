// Write function sum that works like this: sum(a)(b) = a+b.

// Yes, exactly this way, using double parentheses (not a mistype).

// For instance:

// sum(1)(2) = 3
// sum(5)(-1) = 4

function sum(firstNumber) {
  return function (secondNumber) {
    return firstNumber + secondNumber;
  };
}

alert(sum(1)(2));
alert(sum(5)(-1));

// To the second parentheses work is necessary
// that the function returns another function

// The function will take "firstNumber" as an argument
// and the second required parameter will be gotten
// searching in the external scope
