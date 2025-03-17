// Fetch using async await

// async function getUsers1() {
//   let users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();
//   console.log(users);
// }
// getUsers1();

// Short Way to Get
const getUsers = async () =>
  (await fetch("https://jsonplaceholder.typicode.com/users")).json();

getUsers().then(console.log).catch(console.error);

// // Post
// async function postUsers1(users) {
//   await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(users),
//     headers: { "Content-type": "application/json; charset=UTF-8" },
//   });
//   console.log("User Posted Successfully", users);
// }
// postUsers1({ title: "Foo", body: "Bar", userId: 1 });

// Short Way
const postUser = async (users) =>
  (
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(users),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
  ).json();

postUser({ title: "Foo", body: "Bar", userId: 1 })
  .then(console.log)
  .catch(console.error);
