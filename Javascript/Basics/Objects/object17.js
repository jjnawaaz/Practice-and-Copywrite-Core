/**
 * ✅ Problem 10: Nested Objects - Access and Manipulate Data
👉 Task:
You are given a nested object student:

javascript
Copy
Edit
const student = {
  name: "Alice",
  age: 22,
  marks: {
    math: 85,
    science: 90,
    english: 78,
  },
  address: {
    city: "Los Angeles",
    country: "USA",
  },
};
Now, do the following:
✅ 1. Print the name and age of the student.
✅ 2. Print all subject marks in this format:

Math: 85
Science: 90
English: 78
✅ 3. Print city and country of the student.
✅ 4. Calculate and print the total marks of the student.
✅ 5. Calculate and print the average marks of the student.
 */

const student = {
  name: "Alice",
  age: 22,
  marks: {
    math: 85,
    science: 90,
    english: 78,
  },
  address: {
    city: "Los Angeles",
    country: "USA",
  },
};

// Name and Age of Student
console.log(`Name: ${student.name}, Age: ${student.age}`);

// Print Subject Marks
Object.keys(student.marks).forEach((key, val) => {
  console.log(
    `${key.charAt(0).toUpperCase() + key.slice(1)} : ${student.marks[key]}`
  );
});

// Print city and Country
console.log(
  `City: ${student.address.city}, Country: ${student.address.country}`
);

// Total marks
let sum = 0;
Object.values(student.marks).forEach((val) => (sum += val));
console.log(`Total Marks : ${sum}`);

let avg = sum / Object.keys(student.marks).length;

console.log(`The Average is: ${avg}`);
