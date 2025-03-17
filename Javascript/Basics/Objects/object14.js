// Merging Objects

const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  c: 3,
  d: 4,
};

// Using Object.assign()
const merged = Object.assign({}, obj1, obj2);
console.log(merged);

// Using spread operator ...
const merged1 = { ...obj1, ...obj2 };

console.log(merged1);
