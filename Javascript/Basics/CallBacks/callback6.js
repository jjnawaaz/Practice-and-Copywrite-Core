// Callback hell simulation

function getUser(userId, callback) {
  setTimeout(() => {
    console.log("User fetched");
    callback({ id: 102, name: "Bob" });
  }, 2000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    console.log("Orders fetched");
    callback([
      { orderId: 201, item: "Laptop" },
      { orderId: 202, item: "PC" },
    ]);
  }, 4000);
}

getUser(101, (user) => {
  console.log(user);
  getOrders(user.id, (orders) => {
    console.log(orders);
  });
});
