/**
 * ✅ Problem 3: Count Number of Properties & Sum of Numeric Values in Object
👉 Task:
You are given an object employee:

const employee = {
  name: "Alice",
  age: 30,
  department: "HR",
  salary: 50000
};
Now, do the following:
✅ Count the total number of properties in the object.
✅ Sum all the numeric values (only age and salary should be added).
✅ Print all the key-value pairs in the format: key: value.
 */

const employee = {
  name: "Alice",
  age: 30,
  department: "HR",
  salary: 50000,
};

// Count total number of properties

const length = Object.keys(employee).length;

console.log(length);

// Sum of Numerics
let sum = 0;
Object.values(employee).forEach((value) => {
  if (Number.isInteger(value)) {
    sum += value;
  }
});
console.log(sum);

// Print all key value pairs in format key: value

Object.entries(employee).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
