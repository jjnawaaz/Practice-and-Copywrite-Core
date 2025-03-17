/**
 * ✅ Problem 7: Add, Update, and Delete Properties in Object
👉 Task:
You are given an object product:

javascript
Copy
Edit
const product = {
  id: 101,
  name: "Laptop",
  price: 50000,
  brand: "Dell",
};
Now, perform the following:
✅ Add a new property color with value "Silver".
✅ Update the price of the product to 55000.
✅ Delete the brand property from the object.
✅ Print the final object to verify all changes.

 */

const product = {
  id: 101,
  name: "Laptop",
  price: 50000,
  brand: "Dell",
};

// add property
product.color = "Silver";

product.price = 55000;

delete product.brand;

console.log(product);
