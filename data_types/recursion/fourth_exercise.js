// Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// Write a function printList(list) that outputs list items one-by-one.

// Make two variants of the solution: using a loop and using recursion.

// What’s better: with recursion or without it?

// The solution with loop is better because doesn't consumes too many CPU resources.

function printListWithLoop(object) {
  let instance = object;

  while (instance) {
    window.alert(instance.value);
    instance = instance.next;
  }
}

function printListWithRecursion(object) {
  window.alert(object.value);

  if (object.next) {
    printListWithRecursion(object.next);
  }
}

printListWithLoop(list);
printListWithRecursion(list);
