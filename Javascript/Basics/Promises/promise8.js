// allSettled() - Waits for all promises to settle (either resolve or reject).

const p1 = Promise.resolve("Success 1");
const p2 = Promise.reject("Failure 2");
const p3 = Promise.resolve("Success 3");

Promise.allSettled([p1, p2, p3]).then((result) => console.log(result));
