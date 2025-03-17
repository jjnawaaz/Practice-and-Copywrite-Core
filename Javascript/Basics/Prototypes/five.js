// OverRiding Prototype Methods

function Car() {
  Car.prototype.drive = function () {
    console.log("Driving");
  };
}

const myCar = new Car();
myCar.drive();

Car.prototype.drive = function () {
  console.log("Flying");
};

myCar.drive();
