// ES6 Features

// Destructuring

const person = { name: "John", age: 26 };
const { name, age } = person; // { should be keys of Object }
console.log(name, age);

// Spread and rest operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 3, 4];

console.log(arr1);
console.log(arr2);

function sum(...numbers) {
  return numbers.reduce((prev, next) => prev + next, 0);
}

console.log(sum(1, 2, 3, 4));

// Chaining and Nullish
const user = { profile: { name: "Alice" } };
console.log(user?.profile.name);
console.log(user?.details?.email ?? "No Email");

// Template Literals and Arrow Functions
const name1 = "Sam";
console.log(`Hello ${name1}`);

const greet = (msg) => console.log(msg);
greet("Hi");
