/**
 * Create a Promise that waits 2 seconds and then resolves with value "Hello World!".
Chain it to print "Hello World!", then print "Chained Success!".
 */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hello World"), 2000);
});

promise
  .then((str) => {
    console.log(str);
    return "Chained Success";
  })
  .then((str) => {
    console.log(str);
  });
