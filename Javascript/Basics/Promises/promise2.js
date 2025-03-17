// Chaining promises

new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve(5);
  }, 2000);
})
  .then((num) => {
    console.log(num);
    return num * 2;
  })
  .then((num) => {
    console.log(num);
    return num * 3;
  })
  .then((num) => {
    console.log(num);
  });
