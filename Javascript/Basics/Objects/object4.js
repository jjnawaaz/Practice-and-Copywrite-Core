// 🚀 Real-life Example: Sum of all numerical values in object

const data = { a: 10, b: 20, c: 30 };

const sum = Object.values(data).reduce((acc, prev) => acc + prev, 0);

console.log(sum);
