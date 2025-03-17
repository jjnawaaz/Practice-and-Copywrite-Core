console.log(foo); // ?
var foo = "Hello";
bar(); // ?
function bar() {
  console.log("Inside bar");
  console.log(foo);
}
