/**
 * ✅ Problem 2: Iterate over Object using different methods
👉 Task:

You are given an object student:

const student = {
  name: "John Doe",
  age: 21,
  course: "Computer Science",
  city: "New York"
};
Now do the following:
Print all keys using Object.keys and loop through them.
Print all values using Object.values.
Print both keys and values using Object.entries.

 */

const student = {
  name: "John Doe",
  age: 21,
  course: "Computer Science",
  city: "New York",
};

const keys = Object.keys(student);

keys.forEach((key) => console.log(key));

const values = Object.values(student);

values.forEach((value) => console.log(value));

const entries = Object.entries(student);

entries.forEach(([key, value]) => {
  console.log(`${key} : ${value}`);
});
