/**
 *
 *  ✅ Problem 1: Create and Manipulate Object
    👉 Task:
    Create an object car with properties brand, model, and year.
    Access and print the brand and model.
    Add a new property color.
    Update the year.
    Delete the model property.
    Print the final object.
 */

const obj = {
  brand: "Tesla",
  model: "Model S",
  year: "2022",
};

console.log(obj.brand);

obj.color = "red";

obj.year = "2024";

delete obj.model;

console.log(obj);
