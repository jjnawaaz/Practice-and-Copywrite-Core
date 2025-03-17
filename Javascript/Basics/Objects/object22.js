// Object.fromEntries
const data = {
  name: "John",
  age: 27,
  score: 85,
};

// convert into array

const entries = Object.entries(data);

const filtered = entries.filter(([key, val]) => Number.isInteger(val));
console.log(filtered);

// convert to object
const databack = Object.fromEntries(filtered);
console.log(databack);
