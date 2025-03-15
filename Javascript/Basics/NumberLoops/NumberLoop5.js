// Filter and Reduce

// array of numbers
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log(evenNumbers);

// array of strings
const names = ["Alice", "Bob", "Lewis", "Charles", "Max"];

const longNames = names.filter((n) => n.length > 3);
console.log(longNames);

// Array of Objects

const users = [
  {
    name: "Max",
    age: 17,
  },
  {
    name: "Kimi",
    age: 14,
  },
  {
    name: "Lewis",
    age: 30,
  },
  {
    name: "Lando",
    age: 25,
  },
];

const isEligible = users.filter((i) => i.age > 18);
console.log(isEligible);

// Reduce

// Array of numbers
const numbers1 = [1, 2, 3, 4, 5];

const sum = numbers1.reduce((prev, curr) => {
  const total = prev + curr;
  console.log(total);
  return total;
}, 0);
console.log(sum);

// Array of strings
const words = ["Hello", "World", "JS"];

const sentence = words
  .reduce((prev, curr) => prev + " " + curr)
  .toLocaleUpperCase();

console.log(sentence);

// trying filter on objects

const products = [
  {
    name: "Laptop",
    price: 1000,
  },
  {
    name: "Laptop",
    price: 100,
  },
  {
    name: "Phone",
    price: 100,
  },
  {
    name: "Tablet",
    price: 200,
  },
];

const filteredProducts = products.filter((value) => value.name == "Laptop");

console.log(filteredProducts);

// Sum total price using reduce

const sum1 = products.reduce((prev, next) => prev + next.price, 0);
console.log(sum1);

// Counting occurences in array

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((prev, fruit) => {
  console.log(prev, fruit);
  console.log(prev);
  prev[fruit] = (prev[fruit] || 0) + 1;
  console.log(prev);
  return prev;
}, {});

console.log(count);
