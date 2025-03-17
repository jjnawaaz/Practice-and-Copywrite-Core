// Instead of storing the whole object, store only the names of people under each city.

const people = [
  { name: "Alice", city: "Delhi" },
  { name: "Bob", city: "Mumbai" },
  { name: "Charlie", city: "Delhi" },
];

const groupedData = people.reduce((acc, curr) => {
  acc[curr.city] = acc[curr.city] || [];
  acc[curr.city].push(curr.name);
  return acc;
}, {});

console.log(groupedData);
