/**
 * Question 1: Check Property Presence
Task:

You are given an object:


const person = {
  name: "Alice",
  age: 25
};
👉 Check if the person object has the property "name" and "gender". Print true or false accordingly.

 */

const person = {
  name: "Alice",
  age: 25,
};

console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("gender"));
