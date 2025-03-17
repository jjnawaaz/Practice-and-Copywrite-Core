/**
 * ✅ Problem 8: Merge Two Objects and Iterate
👉 Task:

You are given two objects person and address:

const person = {
  name: "John",
  age: 30,
};

const address = {
  city: "New York",
  country: "USA",
};
Now do the following:

✅ 1. Merge both objects into a new object called personInfo.
✅ 2. Iterate over the merged object and print all key-value pairs in this format:
 */

const person = {
  name: "John",
  age: 30,
};

const address = {
  city: "New York",
  country: "USA",
};

const merge = { ...person, ...address };
Object.entries(merge).forEach(([key, val]) => {
  console.log(`${key}: ${val}`);
});
