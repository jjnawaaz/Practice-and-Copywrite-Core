async function asyncFunc1() {
  console.log("Async 1 Start");
  await asyncFunc2();
  console.log("Async 1 End");
}

async function asyncFunc2() {
  console.log("Async 2");
}

console.log("Script Start");

setTimeout(() => console.log("Timeout"), 0);

asyncFunc1();

Promise.resolve().then(() => console.log("Promise"));

console.log("Script End");

/**
 *  Script Start
 *  Async 1 Start
 *  Async 2
 *  Script End
 *  Async 1 End
 *  Promise
 *  Timeout
 */
