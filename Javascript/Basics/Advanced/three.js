// Recap to this

const obj = {
  name: "Junaid",
  greet() {
    console.log(this.name);
  },
};

obj.greet();

function sayHi() {
  console.log(this); // undefined in strict mode, window otherwise
}

sayHi();

const arrowFunc = () => console.log(this);
arrowFunc();
