// Error Handling

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Error while fetching"), 3000);
  });
}

async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

getData();
