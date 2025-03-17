function greet(country) {
  return function (name) {
    if (country == "India") {
      return `Namaste, ${name}`;
    } else if (country == "USA") {
      return `Hello, ${name}`;
    } else {
      return `Hi, ${name}`;
    }
  };
}

const greetIndian = greet("India");
const greetAmerican = greet("America");

console.log(greetIndian("Junaid"));
console.log(greetAmerican("Trump"));
