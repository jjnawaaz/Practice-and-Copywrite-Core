// Pitfalls

const obj = { name: "Tommy" };
const child = Object.create(obj);
console.log(child.name); // inherits from obj
child.name = "New Name"; // Shadows the prototypes name here
console.log(child); // Prints new name
