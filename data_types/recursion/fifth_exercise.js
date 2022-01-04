// Output a single-linked list from the previous task
// Output a single-linked list in the reverse order.

// Make two solutions: using a loop and using a recursion.

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

function printListReverseWithLoop(object) {
  let list = [];
  let instance = object;

  while (instance) {
    list.push(instance.value);
    instance = instance.next;
  }

  list.reverse().forEach((element) => alert(element));
}

function printListReverseWithRecursion(object) {
  if (object.next) {
    printListReverseWithRecursion(object.next);
  }
  alert(object.value);
}

printListReverseWithLoop(list);
printListReverseWithRecursion(list);
