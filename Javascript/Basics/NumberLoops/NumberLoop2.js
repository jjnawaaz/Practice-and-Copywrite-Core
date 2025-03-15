// Add all digits

const num = 12345;
let digits = num.toString().split("");

// OG Loop
let sum = 0;
for (let i = 0; i < digits.length; i++) {
  digits[i] = parseInt(digits[i]); // Convert String to Number
  sum += digits[i];
}

console.log("After using OG Loop sum = ", sum);

// Reset Sum
sum = 0;

// Using for of
for (digit of digits) {
  digit = Number(digit); // another way to convert String to Number
  sum += digit;
}
console.log("After using for Of loop sum is : ", sum);

// forEach
sum = 0;
digits.forEach((digit, idx) => {
  digits[idx] = digits[idx] * 1;
  sum += digits[idx];
});

console.log("After using forEach Loop Sum is : ", sum);

// map()
sum = 0;
digits.map((value, idx) => {
  digits[idx] = +digits[idx];
  sum += digits[idx];
});

console.log("After using map : ", sum);
