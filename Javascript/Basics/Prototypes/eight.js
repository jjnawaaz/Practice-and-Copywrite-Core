function addFlyingAbility(constructorFn) {
  constructorFn.prototype.fly = function () {
    console.log(`${this.name} is flying`);
  };
}

function Bird(name) {
  this.name = name;
}

addFlyingAbility(Bird);

const sparrow = new Bird("Sparrow");
sparrow.fly();
