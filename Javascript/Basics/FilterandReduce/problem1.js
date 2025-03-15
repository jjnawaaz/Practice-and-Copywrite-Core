// 1. Filter active users who have more than 3 orders.

const users = [
  {
    id: 1,
    name: "Alice",
    isActive: true,
    orders: [101, 102, 103, 104],
  },
  {
    id: 4,
    name: "Hamilton",
    isActive: true,
    orders: [101, 102, 103, 104],
  },
  {
    id: 2,
    name: "Bob",
    isActive: false,
    orders: [105],
  },
  {
    id: 3,
    name: "Charlie",
    isActive: true,
    orders: [106, 107],
  },
];

const filteredUsers = users.filter(
  (value) => value.orders.length > 3 && value.isActive == true
);
console.log(filteredUsers);
