function getUser() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Users Fetched"), 2000)
  );
}

function getPosts() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Posts Fetched"), 3000)
  );
}

async function getData() {
  try {
    const result = await Promise.all([getUser(), getPosts()]);
    console.log("User Data: " + result[0]);
    console.log("Posts Data: " + result[1]);
  } catch (e) {
    console.log(e);
  }
}

getData();
