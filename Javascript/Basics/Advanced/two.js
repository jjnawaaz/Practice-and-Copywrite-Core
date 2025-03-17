// Example of this and bind

const person = {
  name: "Junaid",
  sayHello: function () {
    console.log("Hello", this.name);
  },
};

const greet = person.sayHello; // We get undefined here
greet();

const boundedGreet = person.sayHello.bind(person); // Binds the function with object person
boundedGreet();
