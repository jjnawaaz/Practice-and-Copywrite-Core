/**
 * ⚙️ 1. Data Privacy in Modules (Factory Pattern)
➡️ You want to create a module that manages private data like an API key, 
but never expose it outside.
 */

function APIService() {
  const apiKey = "SHUSH_ITS_SECRET";

  return {
    fetchData: function (endpoint) {
      console.log(`Fetching data from ${endpoint} with key: ${apiKey}`);
    },
  };
}

const api = APIService();
api.fetchData("/users");
console.log(api.apiKey); // cannot approach it undefined
