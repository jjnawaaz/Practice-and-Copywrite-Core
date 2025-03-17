/**
 * 👉 Write a function sum(a, b, callback) that adds a and b, and passes result to callback to print.
Example output: Sum is 8 when a=5, b=3.
 */

function sum(a, b, callback) {
  let sum = 0;
  setTimeout(() => {
    console.log("Calculated sum is : ");
    sum = a + b;
    console.log(sum);
    callback();
  }, 3000);
}

sum(2, 3, () => {
  console.log("Sum calculated successfully");
});
