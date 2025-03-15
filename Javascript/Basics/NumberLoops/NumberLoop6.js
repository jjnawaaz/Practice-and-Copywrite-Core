// Filter

// filter numbers greater than 10

const prompt = require("prompt-sync")();

// Filter numbers above 10
const numbers = [12, 22, 8, 42, 5, 11, 10, 25, 1, 4, 2, 5, 6];

const filteredNum = numbers.filter((value) => value > 10);

console.log(filteredNum);

const names = [
  "Junaid",
  "Lewis",
  "Hamilton",
  "Ayesha",
  "Aman",
  "Arjun",
  "Charles",
];

const filteredNames = names.filter((value) => value.charAt(0) == "A");

console.log(filteredNames);

// Filter users boolean value basis
const users = [
  { id: 1, name: "Alice", isActive: true },
  { id: 2, name: "Bob", isActive: false },
  { id: 3, name: "Charlie", isActive: true },
  { id: 4, name: "David", isActive: false },
  { id: 5, name: "Eve", isActive: true },
];

const filteredUsers = users.filter((value) => value.isActive == true);
console.log(filteredUsers);

// Numbers that are odd
const numbers1 = [12, 7, 3, 24, 19, 8, 5, 14, 21];

const filteredNumbers1 = numbers1.filter((value) =>
  value % 2 == 0 ? "" : value
);

console.log(filteredNumbers1);

// Elements less than 4
const words = ["cat", "tiger", "dog", "lion", "bat", "elephant"];
const filteredWords = words.filter((value) => (value.length < 4 ? value : ""));
console.log(filteredWords);

// Reduce Sum all elements
const nums = [10, 20, 30, 40, 50];
const sum = nums.reduce((prev, next) => prev + next, 0);
console.log(sum);

// multiply all numbers in an array
const factors = [2, 3, 4, 5];

const product = factors.reduce((prev, next) => (prev *= next), 1);
console.log(product);

// count apple occurences
const fruits = ["apple", "banana", "apple", "orange", "apple", "grape"];

const appleOccurences = fruits.reduce(
  //   (prev, next) => (next == "apple" ? (prev[next] = (prev[next] || 0) + 1) : ""),
  (prev, next) => {
    next == "apple" ? (prev[next] = (prev[next] || 0) + 1) : "";
    return prev;
  },
  {}
);

console.log(appleOccurences);

// concatenate array into sentence

const sentenceParts = [
  "Learning",
  "JavaScript",
  "is",
  "fun",
  "and",
  "powerful",
];
const sentence = sentenceParts.reduce((prev, next) => prev + " " + next);
console.log(sentence);

// Find max
const values = [23, 89, 15, 67, 99, 34];
const max = values.reduce((prev, next) => {
  if (prev < next) {
    prev = next;
  }
  return prev;
}, 0);

console.log(max);
