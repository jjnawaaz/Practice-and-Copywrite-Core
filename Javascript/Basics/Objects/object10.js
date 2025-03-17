/**
 * ✅ Problem 4: Iterate over Nested Objects
👉 Task:
You are given a nested object company:

javascript
Copy
Edit
const company = {
  name: "TechCorp",
  location: "New York",
  employees: {
    emp1: { name: "Alice", age: 30, salary: 50000 },
    emp2: { name: "Bob", age: 25, salary: 40000 },
    emp3: { name: "Charlie", age: 28, salary: 45000 },
  },
};
Now, do the following:
✅ 1. Print the name and location of the company.
✅ 2. Loop through each employee and print their name, age, and salary in this format:


Employee Name: Alice, Age: 30, Salary: 50000
✅ 3. Find the total salary of all employees and print it.
 */

const company = {
  name: "TechCorp",
  location: "New York",
  employees: {
    emp1: { name: "Alice", age: 30, salary: 50000 },
    emp2: { name: "Bob", age: 25, salary: 40000 },
    emp3: { name: "Charlie", age: 28, salary: 45000 },
  },
};

// Print name and Location
console.log(company.name, company.location);

// Loop
let employees = company.employees;

Object.entries(employees).forEach(([key, value]) => {
  console.log(
    `Employee Name : ${value.name}, Age: ${value.age}, Salary: ${value.salary}`
  );
});

// find total
let sum = 0;
Object.entries(employees).forEach(([key, value]) => {
  {
    sum += value.salary;
  }
});

console.log(sum);
