// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name);
// That's an error. "this" will be undefined, because
// the function is called without point syntaxis. "This" is defined from
// the function definition

// With the following syntaxis the intruction works:

function makeOtherUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let otherUser = makeOtherUser();
alert(otherUser.ref().name);

// In this case, "this" is defined at runtime.
// So "ref()" will return the object and from this object
// will get the name
