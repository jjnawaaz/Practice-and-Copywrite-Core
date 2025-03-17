/**
 *  What is Memoization?
👉 Memoization is an optimization technique 
to cache the result of expensive function calls and 
return the cached result when the same inputs occur again.

➡️ Why?

To avoid redundant computations.
Save time when dealing with heavy/recursive functions like 
Fibonacci, factorial, API calls, etc.
 */

function slowAdd(a, b) {
  return a + b;
}

console.log(slowAdd(3, 5));
console.log(slowAdd(3, 5));

// With Memoization

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = args.join(",");
    if (cache[key]) {
      console.log("Fetching from cache");
      return cache[key];
    } else {
      console.log("Computing...");
      const result = fn.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}

const fastAdd = memoize((a, b) => a + b);

console.log(fastAdd(3, 4));
console.log(fastAdd(3, 6));
console.log(fastAdd(3, 4));
console.log(fastAdd(4, 7));
console.log(fastAdd(4, 7));
