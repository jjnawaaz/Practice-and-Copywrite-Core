/**
 * ⚙️ 3. Debounce Function (Performance Optimization in Frontend)
➡️ Prevent function from running too often — like in search bars.
 */

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const handleSearch = debounce((query) => {
  console.log(`Search for ${query}`);
}, 500);

handleSearch("Hello");
handleSearch("Hello");
handleSearch("Hello World");
