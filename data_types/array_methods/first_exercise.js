// Write the function camelize(str) that changes dash-separated words like “my-short-string”
// into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == "backgroundColor";
// camelize("list-style-image") == "listStyleImage";
// camelize("-webkit-transition") == "WebkitTransition";

// P.S. Hint: use split to split the string into an array, transform it and join back.

function camelize(str) {
  let firstArray = str.split("-");

  let secondArray = firstArray
    .slice(1)
    .map((item) => item[0].toUpperCase().concat(item.slice(1)));

  let answer = firstArray[0].concat(secondArray.join(""));

  return answer;
}

window.alert(camelize("background-color") == "backgroundColor");
window.alert(camelize("list-style-image") == "listStyleImage");
window.alert(camelize("-webkit-transition") == "WebkitTransition");
