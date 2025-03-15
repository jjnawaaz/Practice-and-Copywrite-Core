// 10. Find all users with at least one pending order.

const users = [
  {
    id: 1,
    name: "Alice",
    orders: [
      { id: 101, status: "completed" },
      { id: 102, status: "pending" },
    ],
  },
  { id: 2, name: "Bob", orders: [{ id: 103, status: "completed" }] },
  { id: 3, name: "Charlie", orders: [{ id: 104, status: "pending" }] },
];

const filteredPersons = users.filter((value) => {
  for (let i = 0; i < value.orders.length; i++) {
    if (value.orders[i].status == "pending") return true;
  }
});

console.log(filteredPersons);

console.dir(filteredPersons, { depth: null, showHidden: true });
