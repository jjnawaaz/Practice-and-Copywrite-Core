// Syntactic Sugar over Promises .then() chains
/**
 * 1. What is async/await?
async/await is syntactic sugar over Promises.
It makes asynchronous code look synchronous.
Helps you avoid callback hell and complex .then() chains.
 */

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data Fetched"), 3000);
  });
}

async function getData() {
  console.log("Fetching.....");
  const result = await fetchData();
  console.log(result);
}

getData();
