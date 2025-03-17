/**
 *
 */

const obj = { name: "Junaid" };
console.log(obj.__proto__); // Points to Object.prototype

// Example
const animal = { eats: true };
const dog = { barks: true };
dog.__proto__ = animal; // inherits from animal whole object

console.log(dog.eats);
console.log(dog.barks);
