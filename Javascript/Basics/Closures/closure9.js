function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const search = debounce((q) => {
  console.log("Query Seacrhed", q);
}, 2000);

search("hello");
search("Hi");
search("hello there");
