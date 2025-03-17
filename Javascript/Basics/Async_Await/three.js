// running multiple promises in await

function task(time, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), time));
}
async function runTasks() {
  const [a, b, c] = await Promise.all([
    task(5000, "First"),
    task(1000, "Second"),
    task(3000, "Third"),
  ]);
  console.log(a, b, c);
}

runTasks();
