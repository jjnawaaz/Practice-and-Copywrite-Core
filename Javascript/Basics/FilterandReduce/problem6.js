//  Flatten an array of orders to extract all product IDs.

const orders = [
  { orderId: 1, products: [101, 102] },
  { orderId: 2, products: [103] },
  { orderId: 3, products: [104, 105, 106] },
];

let newArr = [];
newArr = orders.reduce((prev, next) => {
  newArr.push(next.products);
  return prev;
});
console.log(newArr);
