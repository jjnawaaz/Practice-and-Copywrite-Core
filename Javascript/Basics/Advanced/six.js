// Edge cases

const person = {
  name: "Junaid",
  sayHi: function () {
    console.log(this.name);
  },
};

person.sayHi(); // can still access this here

const greet = person.sayHi; // undefined
greet();

const person1 = {
  name: "Junaid",
  sayHi: () => {
    console.log(this.name);
  },
};

person1.sayHi();
