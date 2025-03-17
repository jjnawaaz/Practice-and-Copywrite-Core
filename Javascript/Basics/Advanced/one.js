/**
 *  What is this in JavaScript?
this refers to the object that is executing the current function.
Its value depends on how the function is called (execution context).
🔑 Why Call, Apply, Bind?
Sometimes we want to manually set the value of this inside a function.
👉 That's where Call, Apply, and Bind come in!
 */

// call()  sets this to object person

function greet(...message) {
  console.log(message + " " + this.name);
}
const person = { name: "Junaid" };
greet.call(person, "Hello");

// apply() takes array as arguments

greet.apply(person, ["Hi", "There"]);

// Bind() return new function with this bound to specific object but doesn't invoke immediately
const greetPerson = greet.bind(person);
greetPerson("Welcome");
