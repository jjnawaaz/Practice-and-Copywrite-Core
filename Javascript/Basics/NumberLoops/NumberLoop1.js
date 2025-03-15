// Multiply digits by 3

// Using tradtional loop

const num = 12345;
let digits = num.toString().split("");

// Using OG Loop
for (let i = 0; i < digits.length; i++) {
  digits[i] = digits[i] * 3;
}

console.log("After OG Loop : ");
console.log(digits);

// Using for of storing it in arr bcoz we cant mutate OG array

let arr = () => {
  for (digit of digits) {
    digit = digit * 3;
  }
  console.log(digits);
};

arr();

// For Each

digits.forEach((digit, index) => {
  digits[index] = digit * 3;
});

console.log("After Using for each : ");
console.log(digits);

// map use a variable

const mappedArr = digits.map((digit, idx) => digit * 3);

console.log("After Manipulating using Map()");

console.log(mappedArr);
