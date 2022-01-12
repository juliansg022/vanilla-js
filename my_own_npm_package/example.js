import objectsAreEquals from "customized-object-comparator";

console.log(objectsAreEquals(["a", "b"], ["a", "b"])); // true
console.log(objectsAreEquals({ x: 1, y: 4 }, { x: 1, y: 4 })); // true

console.log(objectsAreEquals({ x: 1, y: 4 }, { x: 1 })); // false
console.log(objectsAreEquals({ x: 1, y: 4 }, { x: 1, y: 4 }, [1, 4])); // false
