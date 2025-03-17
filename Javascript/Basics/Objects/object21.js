// Object.fromEntries()

/**
 * ✅ 6. Object.fromEntries()
✅ What is Object.fromEntries()?
Object.fromEntries() converts a list of key-value pairs (entries) into an object.
It is the reverse of Object.entries().
 */

// Used to convert array of pairs

const entries = [
  ["name", "Alice"],
  ["age", 25],
  ["city", "New York"],
];

const obj = Object.fromEntries(entries);

console.log(obj);
