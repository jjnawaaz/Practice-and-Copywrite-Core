// 5. Find the highest-rated product.

const products = [
  { id: 1, name: "Laptop", rating: 4.5 },
  { id: 2, name: "Phone", rating: 4.7 },
  { id: 3, name: "Tablet", rating: 4.2 },
];

const highRated = products.reduce((prev, next) => {
  prev = prev || {};
  if (prev.rating < next.rating) {
    prev = next;
  }
  return prev;
});

console.log(highRated);
