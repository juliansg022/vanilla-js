// What’s wrong with the code style below?

// function pow(x,n) // The space between parameters is missing

// { // The opening brace must be in the same of the function statement

//   let result=1;

//   /** The spaces around the assignament operator are missing
//    *  Also a space is necessary to separate the variable definition
//    *  to the next loop.
//    */

//   for(let i=0;i<n;i++) {result*=x;}

//   /**
//    * The spaces between the three members of the loop are missing.
//    * Additionaly, the spaces between the operators and the operand
//    * is missing (for the variable definition, and the condition
//    * assessment). When we use braces for isolate the loop actions,
//    * the actions must be in a new line and the closing brace in
//    * another new line. Also we must to add a space around the
//    * operator "*=". Also a space is necessary to separate the loop
//    * to the next return.
//    */

//   return result;
// }

// let x=prompt("x?",''), n=prompt("n?",'')

// /**
//  * Is better to use a single line to define a single variable.
//  * The spaces between the assignament operator are missing. Also
//  * the spaces between the parameters are missing
//  */

// if (n<=0) // The space around the operator "<=" es missing

// { // The opening brace must be in the same of the if-else statement

//   alert(`Power ${n} is not supported, please enter an integer number greater than zero`);

//   // The string must be divided to reduce the horizontal long
// }
// else // The else statement must be in the same of the before closing brace

// { // The opening brace must be in the same of the if-else statement

//   alert(pow(x,n))

//   /**
//    * The spaces between the alert parenthesis is missing.The spaces
//    * bewteen the pow arguments are missing.The semicolon at the end
//    * of the statement is missing.
//    */
// }

// Style solution:

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = window.prompt("x?", "");
let n = window.prompt("n?", "");

if (n <= 0) {
  window.alert(`Power ${n} is not supported,
  please enter an integer number greater than zero`);
} else {
  window.alert(pow(x, n));
}
