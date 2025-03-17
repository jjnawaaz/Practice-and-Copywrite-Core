// JSON and REST APIs

const obj = { name: "Max" };
console.log(`Hello ${obj.name}`);

const jsonstr = JSON.stringify(obj);
console.log(jsonstr);
const parsedObj = JSON.parse(jsonstr);
console.log(parsedObj);

// fetch Data

// GET DATA From Fetch

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data));

// POST
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({ title: "Foo", body: "Bar", userId: 1 }),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
