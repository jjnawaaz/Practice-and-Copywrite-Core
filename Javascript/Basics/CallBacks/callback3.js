// API Simulation

function fetchDatafromServer(callback) {
  setTimeout(() => {
    console.log("Fetched Data");
    callback("Sample Data");
  }, 3000);
}

fetchDatafromServer((data) => {
  console.log("Processing Data", data);
});
