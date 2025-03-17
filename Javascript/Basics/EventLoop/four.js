console.log("Start");

setTimeout(function () {
  console.log("Timeout 1");
  Promise.resolve().then(() => console.log("Promise inside Timeout 1"));
}, 0);

Promise.resolve().then(() => console.log("Promise 1"));

setTimeout(function () {
  console.log("Timeout 2");
}, 0);

console.log("End");

/**
 * Start
 * End
 * Promise 1
 * Timeout 1
 * Promise inside Timeout 1
 * Timeout 2
 */
