//  Filter comments made in the last 7 days.

const comments = [
  { id: 1, text: "Nice post!", date: "2025-03-01" },
  { id: 2, text: "Great article!", date: "2025-03-12" },
  { id: 3, text: "Very helpful", date: "2025-03-14" },
];

const currentDate = new Date();

const sevenDaysAgo = new Date();
sevenDaysAgo.setDate(currentDate.getDate() - 7);

console.log(currentDate, sevenDaysAgo);

const filteredComments = comments.filter((comments) => {
  const commentDate = new Date(comments.date);
  return commentDate >= sevenDaysAgo;
});

console.log(filteredComments);
