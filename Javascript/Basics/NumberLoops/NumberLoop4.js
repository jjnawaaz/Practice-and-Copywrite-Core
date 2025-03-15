// Get digits more than 3

const num = 12345;
const checkNum = 3;
let digits = num.toString().split("");
let arr = [];

// OG Loop
for (let i = 0; i < digits.length; i++) {
  if (digits[i] > checkNum) arr.push(digits[i]);
}
console.log("After OG Loop : ", arr);

// forOf
arr = [];
for (let digit of digits) {
  if (digit > checkNum) arr.push(digit);
}
console.log("After forOf loop : ", arr);

// forEach
arr = [];
digits.forEach((digit) => (digit > checkNum ? arr.push(digit) : ""));
console.log("After forEach loop : ", arr);

// map()
arr = [];
digits.map((digit) => (digit > checkNum ? arr.push(digit) : ""));
console.log("After map loop : ", arr);
