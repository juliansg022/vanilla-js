// Write a function pow(x,n) that returns x in power n. Or, in other words,
// multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

// P.S. In this task the function should support only natural values of n: integers up from 1.

function pow(base, exponent) {
  if (exponent > 1) {
    let answer = base;

    while (exponent - 1) {
      answer *= base;
      exponent--;
    }
    return answer;
  } else {
    alert("Only is allowed exponents up from 1");
  }
}

let base = prompt("Write a base to calculate its power");
let exponent = prompt("Write the exponent");

alert(pow(base, exponent));
