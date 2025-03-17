/**
 * ✅ Problem 9: Object of Arrays - Iterate and Sum Elements
👉 Task:

You are given an object scores where each key holds an array of numbers:

javascript
Copy
Edit
const scores = {
  math: [90, 85, 88],
  science: [92, 81, 79],
  english: [85, 87, 90],
};
Now, do the following:

✅ 1. Loop through each subject and print all scores in this format:

Subject: math, Scores: 90, 85, 88
Subject: science, Scores: 92, 81, 79
Subject: english, Scores: 85, 87, 90
✅ 2. Calculate and print the total score of each subject.
✅ 3. Calculate and print the overall total score (sum of all scores in all subjects).
 */

const scores = {
  math: [90, 85, 88],
  science: [92, 81, 79],
  english: [85, 87, 90],
};

for (let key in scores) {
  console.log(`Subject: ${key}, Scores: ${scores[key]}`);
}

let sumofall = 0;
Object.keys(scores).forEach((val) => {
  let total = scores[val].reduce((prev, next) => prev + next, 0);
  sumofall += total;
  console.log(`${val} : ${total}`);
});

console.log(sumofall);
