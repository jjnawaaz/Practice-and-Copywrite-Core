/**
 * Question 2: Filter Own Properties in Loop

Task:

You are given an object with some properties:

const employee = {
  id: 101,
  role: "Developer"
};
👉 Loop through the object and print only its own properties using hasOwnProperty().

Expected Output:

id: 101
role: Developer
 */

const employee = {
  id: 101,
  role: "Developer",
};

for (let key in employee) {
  if (employee.hasOwnProperty(key)) {
    console.log(`${key} : ${employee[key]}`);
  }
}
