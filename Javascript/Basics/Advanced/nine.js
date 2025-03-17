// example of callstack with setTimeout

console.log("Start");

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("end");

/**
 * Flow
 *  a()
 *  b()
 *  Promise()    - Microtask  (More Priority than macroTasks)
 *  setTimeout() - Macrotask  (Less Priority than microTasks)
 */
