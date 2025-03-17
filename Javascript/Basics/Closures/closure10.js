/**
 * 🚀 Problem 1 (Beginner): Debounce a Button Click Event
 * 
 * 👉 Goal:
Create a button that logs "Clicked!" when clicked, but only logs once if clicked multiple times quickly (debounce for 1 second).

✅ Focus: Understand basic debounce and setTimeout/clearTimeout.

Example:

Click fast: "Clicked!" (only once after you stop clicking).
 */

function debounce(fn, delay) {
  let timer = 0;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const buttonClicked = debounce(() => {
  console.log(`Button clicked`);
}, 1000);

buttonClicked();
buttonClicked();
buttonClicked();
