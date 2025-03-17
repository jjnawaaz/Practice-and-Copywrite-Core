// Basics

const promise = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});

promise
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("I will always run"));
