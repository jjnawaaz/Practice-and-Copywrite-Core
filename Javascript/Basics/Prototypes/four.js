// Object.create() - allows setting __proto__ directly.

const animal = { eats: true };
const rabbit = Object.create(animal);
console.log(rabbit.eats);
