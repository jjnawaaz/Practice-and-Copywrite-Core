const num = 12345;
let digits = num.toString().split("");

// Using OG loop

console.log("Original Digits : ", digits);

for (let i = 0; i < digits.length; i++) {
  digits[i] *= 3;
}

console.log("After Mutation : ", digits);

// reset digits
digits = num.toString().split("");

for (let digit of digits) {
  digit = digit * 3;
}

console.log("No change after for of loop : ", digits);

// For Each

digits.forEach((i) => i * 3);

console.log(
  "No change suing forEach loop since we didnt manipulate using index ",
  digits
);

// Manipulate using ForEach

digits.forEach((digit, idx, arr) => {
  arr[idx] = digit * 2;
});

console.log("After Mutation using forEach : ", digits);

// using For map()
digits.map((digit) => {
  digit = digit * 3;
});

console.log("After Using Map without mutating original : ", digits);

// map() to manipulate

const newArr = digits.map((idx) => idx * 3);

console.log("Using a new Arr to return", newArr);
