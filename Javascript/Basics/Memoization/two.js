// fibonacci with cache and without cache

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(40));

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = args;
    if (cache[key]) {
      console.log("Fetching from cache");
      return cache[key];
    } else {
      console.log("Computing...");
      const result = fn.apply(this, args);
      cache[key] = result;
      console.log(cache);
      return result;
    }
  };
}

const memofib = memoize(function (n) {
  if (n <= 1) return n;
  return memofib(n - 1) + memofib(n - 2);
});

console.log(memofib(40));
console.log(memofib(11));
