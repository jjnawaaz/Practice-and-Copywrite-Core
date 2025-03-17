console.log("Start");

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => console.log("Promise 1"));

queueMicrotask(() => console.log("Microtask 1"));

setTimeout(() => console.log("Timeout 2"), 0);

Promise.resolve().then(() => console.log("Promise 2"));

console.log("End");

/**
 * Start
 * End
 * Promise1
 * MicroTask1
 * Promise2
 * Timeout 1
 * Timeout 2
 */
