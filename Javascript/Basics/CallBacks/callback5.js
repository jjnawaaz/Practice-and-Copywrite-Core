/**
 * Problem:
Write a function getUserData(userId, callback) 
that simulates fetching user data from a server and 
calls the callback with user data after 2 seconds.
 */

function getUserData(userId, callback) {
  setTimeout(() => {
    const user = { id: userId, name: "Alice", age: 30 };
    console.log("User data is fetched");
    callback(user);
  }, 2000);
}

getUserData(3, (i) => {
  console.log("User is : ", i);
});
