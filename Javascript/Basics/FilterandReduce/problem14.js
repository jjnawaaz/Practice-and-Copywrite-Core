// ✅ Variation 2: Grouping and Counting People per City

const people = [
  { name: "Alice", city: "Delhi" },
  { name: "Bob", city: "Mumbai" },
  { name: "Charlie", city: "Delhi" },
];

const groupedData = people.reduce((acc, curr) => {
  acc[curr.city] = (acc[curr.city] || 0) + 1;
  return acc;
}, {});

console.log(groupedData);
