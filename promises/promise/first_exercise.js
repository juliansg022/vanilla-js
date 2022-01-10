// What’s the output of the code below?

let promise = new Promise(function (resolve, reject) { // jshint ignore:line
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(window.alert);
// It will show 1. The promise returns the first "revolve"
// or reject that it found. So the las statement within the
// promise will be ignored