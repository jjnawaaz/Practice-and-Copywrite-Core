// Given an array of people with their city, group them by city.

const people = [
  { name: "Alice", city: "Delhi" },
  { name: "Bob", city: "Mumbai" },
  { name: "Charlie", city: "Delhi" },
];

const groupedData = people.reduce((prev, next) => {
  prev[next.city] = prev[next.city] || [];
  prev[next.city].push(next);
  return prev;
}, {});

console.log(groupedData);
