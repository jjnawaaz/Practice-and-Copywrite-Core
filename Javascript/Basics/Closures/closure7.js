// Event Listeners

function setCounter(buttonId) {
  let count = 0;
  document.getElementById(buttonId).addEventListener("click", () => {
    count++;
    console.log(`Clicked ${count} times`);
  });
}
