/**
 * ✅ 7. Object.seal() — Prevent Adding/Deleting but Allow Updates
📌 What is it?
Object.seal() seals an object:

You cannot add or delete properties.
But you can update existing properties.

 */

const user = {
  username: "John",
  age: 30,
};

Object.seal(user);

user.color = "Silver"; // doesnt get executed
delete user.username; // doesnt get executed

user.username = "Bob"; // Can still update existing entries unlike freeze

console.log(user);
