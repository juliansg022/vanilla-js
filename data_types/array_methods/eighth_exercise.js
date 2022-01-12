// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and
// fullName, where fullName is generated from name and surname.

// For instance:

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

/* ... your code ... */
let usersMapped = users.map((user) =>
  Object.create({
    fullName: user.name + " " + user.surname,
    id: user.id,
  })
);

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

window.alert(usersMapped[0].id); // 1
window.alert(usersMapped[0].fullName); // John Smith

// So, actually you need to map one array of objects to another.
// Try using => here. There’s a small catch.
