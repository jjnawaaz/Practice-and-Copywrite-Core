// Seal and Freeze

/**
 * Object.freeze() freezes an object:

You cannot add, delete, or update any properties of the object after freezing it.
It makes the object immutable (cannot be changed).

 */

const person = {
  name: "Alice",
  age: 25,
};

Object.freeze(person);

person.name = "Bob"; // Didnt get executed nor did we get an error here
delete person.age; // didnt get executed nor an error

console.log(person);

const person1 = {
  name: "Alice",
  address: {
    city: "Los Angeles",
  },
};

Object.freeze(person1);

person1.address.city = "New York"; // Gets updated doesnt freeze deep objects

console.log(person1);
