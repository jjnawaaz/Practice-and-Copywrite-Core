// Edge cases

const obj = {
  name: "Junaid",
};

function greet() {
  console.log(this.name);
}

greet.bind(obj).bind({ name: "Ali" })(); // doesnt get changed to ali since bind is permanent once applied
