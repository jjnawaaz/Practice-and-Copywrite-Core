// 4. Count total number of users from each country (group by country).

const users = [
  { id: 1, name: "Alice", country: "USA" },
  { id: 2, name: "Bob", country: "India" },
  { id: 3, name: "Charlie", country: "India" },
  { id: 4, name: "David", country: "USA" },
  { id: 5, name: "Eva", country: "Germany" },
];

const filteredGroup = users.reduce((prev, next) => {
  prev[next.country] = (prev[next.country] || 0) + 1;
  return prev;
}, {});

console.log(filteredGroup);
