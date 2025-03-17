console.log("First");

queueMicrotask(() => console.log("Second"));

Promise.resolve().then(() => console.log("Third"));

queueMicrotask(() => console.log("Fourth"));

console.log("Fifth");

/**
 * First
 * Fifth
 * Second
 * Third
 * Fourth
 */
