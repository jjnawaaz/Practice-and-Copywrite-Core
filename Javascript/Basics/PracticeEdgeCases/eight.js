async function getUsers() {
  return (await fetch("https://jsonplaceholder.typicode.com/users")).json();
}

getUsers().then((response) =>
  response.forEach((user) => {
    console.log(user.name);
  })
);
