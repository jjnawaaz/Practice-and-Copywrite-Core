// .all()

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3]).then((results) => console.log(results));

// Any rejected promise
const p4 = Promise.resolve("resolved");
const p5 = Promise.reject("rejected");
const p6 = Promise.resolve("resolved");

Promise.all([p4, p5, p6])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// here if one promise fails entire promise all fails
