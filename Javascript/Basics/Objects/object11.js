/**
 * ✅ Problem 5: Object with Array of Objects
👉 Task:
You are given an object school:

javascript
Copy
Edit
const school = {
  name: "Greenwood High",
  location: "California",
  students: [
    { name: "Emma", grade: "A", marks: 90 },
    { name: "Liam", grade: "B", marks: 80 },
    { name: "Olivia", grade: "A", marks: 95 },
  ],
};
Now do the following:
✅ Print the name and location of the school.
✅ Loop through each student and print their name, grade, and marks in this format:
yaml
Copy
Edit
Student Name: Emma, Grade: A, Marks: 90
✅ Find the average marks of all students and print it.
 */

const school = {
  name: "Greenwood High",
  location: "California",
  students: [
    { name: "Emma", grade: "A", marks: 90 },
    { name: "Liam", grade: "B", marks: 80 },
    { name: "Olivia", grade: "A", marks: 95 },
  ],
};

console.log(school.name, school.location);

// loop each student
let total = 0;
school.students.forEach((val) => {
  console.log(
    `Student Name: ${val.name}, Grade: ${val.grade} Marks: ${val.marks}`
  );
  total += val.marks;
});

let avg = total / school.students.length;

console.log(avg);
