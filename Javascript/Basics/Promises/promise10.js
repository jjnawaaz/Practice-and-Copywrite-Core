const fetchUserProfile = () => {
  return new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      return setTimeout(() => resolve("User Data"), 1000);
    } else {
      return reject("Failed to fetch User Profile");
    }
  });
};
const fetchNotifications = () => {
  return new Promise((resolve, reject) => {
    let success = false;
    if (success) {
      return setTimeout(() => resolve("Fetched Notifications"), 2000);
    } else {
      return reject("Failed to fetch Notifications");
    }
  });
};

const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      return setTimeout(() => resolve("Fetched Posts"), 3000);
    } else {
      return reject("Error while fetching Posts");
    }
  });
};

Promise.allSettled([
  fetchUserProfile(),
  fetchNotifications(),
  fetchPosts(),
]).then(([user, notification, post]) => {
  console.log(
    "User: " +
      user.status +
      " Message: " +
      user.value +
      " Reason: " +
      user.reason
  );
  console.log(
    "Notification: " +
      notification.status +
      " Message: " +
      notification.value +
      " Reason: " +
      notification.reason
  );
  console.log(
    "Posts: " +
      post.status +
      " Message: " +
      post.value +
      " Reason: " +
      post.reason
  );
});
