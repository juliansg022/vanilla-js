// Are these code fragments equal? In other words,
// do they behave the same way in any circumstances,
// for any handler functions?

promise.then(f1).catch(f2); // jshint ignore:line

// Versus:

promise.then(f1, f2); // jshint ignore:line

// In the first code fragment the function f1
// returns an error that is handled by the
// following catch but in the second code
// fragment it returns aerror that is not handled
