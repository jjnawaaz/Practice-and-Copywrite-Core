// Edge cases

let obj = {
  name: "Junaid",
  greet() {
    setTimeout(function () {
      console.log(this.name); // In regular function this gets lost
    }, 1000);
  },
};

obj.greet();

// fix using arrow function arrow functions remember this objects
obj = {
  name: "Junaid",
  greet() {
    setTimeout(() => console.log(this.name), 3000);
  },
};

obj.greet();
