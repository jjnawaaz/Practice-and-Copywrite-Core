/**
 * ⚙️ 2. Memoization (Caching Computation Results)
➡️ Avoid repeating expensive operations by caching their result
 */

function memoizedAdd() {
  let cache = {}; // private cache

  return function (num) {
    if (cache[num]) {
      console.log("Fetching from cache");
      return cache[num];
    } else {
      console.log("Calculating result");
      let result = num + 10;
      cache[num] = result;
      return result;
    }
  };
}

const add = memoizedAdd();
console.log(add(5));
console.log(add(5));
console.log(add(8));
