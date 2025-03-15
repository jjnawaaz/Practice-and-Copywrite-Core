// Find Even digits

const num = 123456;

let digits = num.toString().split("");

let arr = [];

// using for
for (let i = 0; i < digits.length; i++) {
  if (digits[i] % 2 == 0) {
    arr.push(digits[i]);
  }
}

console.log("Even digits in Number are : ", arr);

// reset
arr = [];

// for of

for (let digit of digits) {
  if (digit % 2 == 0) {
    arr.push(digit);
  }
}

console.log("Even digits using for of : ", arr);

// reset
arr = [];

// for each
digits.forEach((digit) => {
  if (digit % 2 == 0) {
    arr.push(digit);
  }
});

console.log("Even digits using forEach : ", arr);

// map()  not recommended used for transforming data not to do these operations instead use forEach
arr = [];
digits.map((digit) => (digit % 2 == 0 ? arr.push(digit) : ""));

console.log(arr);
