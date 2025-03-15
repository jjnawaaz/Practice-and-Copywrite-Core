// 8. Group orders by their status.

const orders = [
  { id: 1, status: "completed" },
  { id: 2, status: "pending" },
  { id: 3, status: "completed" },
  { id: 4, status: "cancelled" },
];

const filteredOrders = orders.reduce((prev, curr) => {
  prev[curr.status] = prev[curr.status] || [];
  prev[curr.status].push({ id: curr.id });
  return prev;
}, {});

console.log(filteredOrders);
