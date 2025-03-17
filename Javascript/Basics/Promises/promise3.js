// Error Handling

new Promise((resolve, reject) => [resolve(10)])
  .then((num) => {
    throw new Error("Something went wrong");
    return num * 5;
  })
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => console.log("Done!"));
