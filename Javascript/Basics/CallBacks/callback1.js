// Example of simple callback

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Say bye");
}

greet("Junaid", sayBye);
