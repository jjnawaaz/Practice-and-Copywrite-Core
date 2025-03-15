// 3. Filter products that are in stock and cost more than $100.

const products = [
  { id: 1, name: "Laptop", price: 1500, inStock: true },
  { id: 2, name: "Mouse", price: 20, inStock: true },
  { id: 3, name: "Monitor", price: 200, inStock: false },
  { id: 4, name: "Keyboard", price: 120, inStock: true },
];

const filteredProducts = products.filter((value) =>
  value.inStock == true && value.price > 100 ? value : ""
);

console.log(filteredProducts);
