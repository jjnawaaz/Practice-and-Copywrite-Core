console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

(async function () {
  console.log("D");
  await null;
  console.log("E");
})();

console.log("F");

// output
/**
 * A
 * D
 * F
 * C
 * E
 * B
 */
