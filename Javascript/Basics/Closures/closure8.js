// Counter Function with Closure:

function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter();
counter();
counter();
