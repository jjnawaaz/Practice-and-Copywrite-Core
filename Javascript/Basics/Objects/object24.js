/**
 * ✅ 9. Object.hasOwnProperty()
📌 What is it?
Object.hasOwnProperty() checks whether an object 
has a specific property as its own (direct) property,
 not inherited from its prototype chain.
 */

const car = {
  brand: "Toyota",
  model: "Camry",
};

console.log(car.hasOwnProperty("brand"));
console.log(car.hasOwnProperty("model"));

// difference in key in and hasOwnProperty

console.log("model" in car); // true bcoz it exists in object or prototype
console.log("toString" in car); // true (inherited from Object prototype)
console.log(car.hasOwnProperty("toString")); // returns false because object doesnt have toString key
