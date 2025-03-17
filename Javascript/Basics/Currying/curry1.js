/**\
 * What is Currying?
Currying is a functional programming technique where:
A function that takes multiple arguments is transformed 
into a sequence of functions, 
each taking a single argument.
 */

function add(a, b, c) {
  return a + b + c;
}
console.log(add(1, 2, 3));

// Curried Version
function add1(a) {
  return function add(b) {
    return function add(c) {
      return a + b + c;
    };
  };
}

console.log(add1(2)(4)(6));
