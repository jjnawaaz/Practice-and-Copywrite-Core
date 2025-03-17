/**
 * Problem:
Create a function processData(data, callback) 
that doubles each number and sends the new array to callback.
 */

function processData(data, callback) {
  setTimeout(() => {
    // for (idx in data) {
    //   data[idx] *= 2;
    // }

    const result = data.map((i) => i * 2);
    callback(result);
  }, 3000);
}

processData([1, 2], (result) => {
  console.log(result);
});
