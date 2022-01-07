// What do you think? Will the .catch trigger? Explain your answer.

new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

// The promise cannot handle the error
// because it's generated later.

// The interal try..catch only can catch
// the synchronous errors

// If we had something like this:
new Promise(function (resolve, reject) {
  throw new Error("Whoops!");
}).catch(alert);

// The error is handled and it will show "Whoops!"
