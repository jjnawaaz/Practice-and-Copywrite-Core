// 2. Sum total revenue generated from completed orders.

const orders = [
  { orderId: 101, status: "completed", amount: 250 },
  { orderId: 102, status: "pending", amount: 150 },
  { orderId: 103, status: "completed", amount: 300 },
  { orderId: 104, status: "cancelled", amount: 100 },
];

const sum = orders.reduce((prev, next) => {
  next.status == "completed" ? (prev += next.amount) : "";
  return prev;
}, 0);

console.log(sum);
