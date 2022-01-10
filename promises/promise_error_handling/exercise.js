// What do you think? Will the .catch trigger? Explain your answer.

new Promise(function (resolve, reject) { // jshint ignore:line
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(window.alert);

// The promise cannot handle the error
// because it's generated later.

// The interal try..catch only can catch
// the synchronous errors

// If we had something like this:
new Promise(function (resolve, reject) { // jshint ignore:line
  throw new Error("Whoops!");
}).catch(window.alert);

// The error is handled and it will show "Whoops!"
