function getUser() {
  return new Promise((resolve) => setTimeout(() => resolve("User data"), 2000));
}

function getPosts() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Posts data"), 2000)
  );
}

Promise.all([getUser(), getPosts()]).then(([user, posts]) => {
  console.log("User: ", user);
  console.log("User: ", posts);
});
