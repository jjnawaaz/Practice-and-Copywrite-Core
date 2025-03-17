function outer() {
  let name = "Goku";
  return function inner() {
    console.log(name);
  };
}

const sayName = outer();
sayName();
outer();
