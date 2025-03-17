// Assign in object

const obj1 = { a: 1, b: 2 };

const copy = Object.assign({}, obj1);

console.log(copy); // Makes a copy of object

// Merging two objects

const obj2 = { c: 3, d: 4 };

const merged = Object.assign({}, obj1, obj2);

console.log(merged);

// Adding properties to existing object

const properties = { id: 1, name: "Bob" };

Object.assign(merged, properties);

console.log(merged);
