// Rewrite this example code from the chapter Promises
// chaining using async/await instead of .then/catch:

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// loadJson("no-such-user.json").catch(alert); // Error: 404



async function loadJson(url) {
  let promise = await fetch(url);

  if (promise.status == 200) {
    let json = await promise.json();
    return json;
  }

  throw new Error(promise.status);
}

loadJson("no-such-user.json").catch(alert);
