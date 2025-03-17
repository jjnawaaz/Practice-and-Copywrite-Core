// Prototype Pollution

let obj = {};
let payload = JSON.parse('{ "__proto__": { "polluted": "yes" } }');
Object.assign(obj, payload);
console.log(obj.polluted);
