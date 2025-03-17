// Basics of Objects
const person = {
  name: "Alice",
  age: 25,
  city: "Delhi",
};

// access
console.log(person.name);
console.log(person["name"]);

// dynamic key access
const key = "city";
console.log(person[key]);

// adding updating and deleting
person.city = "hyderabad";

person.name = "Lewis Hamilton";

delete person.age;

console.log(person);

// looping in objects

// for in
console.log("****************************************");
console.log("for in");
for (let key in person) {
  console.log(key, person[key]);
}

person.age = 39;

// Object.keys
console.log("****************************************");
console.log("Object Keys");
const keys = Object.keys(person);
console.log(keys);

keys.forEach((key) => {
  console.log(key, person[key]);
});

// Object.values
console.log("****************************************");
console.log("Object Values");

const values = Object.values(person);

values.forEach((i) => console.log(i));

// Object Entries for key and value pairs
console.log("****************************************");
console.log("Object Entries");

const entries = Object.entries(person);
console.log(entries);

entries.forEach(([key, value]) => {
  console.log(key, value);
});
