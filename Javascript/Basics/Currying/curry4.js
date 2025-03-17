/**
 * Challenge: Curry a Function with 5 Arguments (Flexible Grouping)
🎯 Problem Statement:
Create a function multiply that takes 5 arguments and returns their product.
Write a curry function that can take these 5 arguments in any combination:
(a)(b)(c)(d)(e)
(a, b)(c, d, e)
(a, b, c, d, e)
(a, b, c)(d, e)
etc.
When all 5 arguments are collected, return the product.
 */

function multiply(a, b, c, d, e) {
  return a * b * c * d * e;
}

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...newArgs) {
        return curried.apply(this, args.concat(newArgs));
      };
    }
  };
}

const curriedMultiply = curry(multiply);

console.log(curriedMultiply(1)(2)(3)(4)(5)); // 120
console.log(curriedMultiply(1, 2)(3, 4, 5)); // 120
console.log(curriedMultiply(1, 2, 3)(4, 5)); // 120
console.log(curriedMultiply(1, 2, 3, 4)(5)); // 120
console.log(curriedMultiply(1, 2, 3, 4, 5)); // 120
