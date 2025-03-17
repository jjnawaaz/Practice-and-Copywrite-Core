/**
 * ✅ 8. Object.defineProperty()
📌 What is it?
Object.defineProperty() is used to add a new property 
to an object or modify an existing property — 
with full control over its behavior using property descriptors.
 */

const user = {};

Object.defineProperty(user, "name", {
  value: "John",
  writable: false, // cannot change values
  enumerable: true, // will show up in loops
  configurable: false, // cannot delete or reconfigure
});

console.log(user.name);

user.name = "Mike"; // Wont work since writable is false
console.log(user.name);

for (let key in user) {
  console.log(key); //
}

delete user.name; // wont delete because configurable is false
console.log(user.name);
