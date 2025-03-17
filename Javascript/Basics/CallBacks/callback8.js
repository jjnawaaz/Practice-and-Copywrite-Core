/**
 * ✅ Example 1: Basic Error Handling Callback
 */

function fetchData(apiData, callback) {
  setTimeout(() => {
    if (!apiData) {
      return callback("Error no API Data Provided", null);
    }
    callback(null, "API Data fetched successfully");
  }, 2000);
}

fetchData("User Info", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

fetchData(null, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
