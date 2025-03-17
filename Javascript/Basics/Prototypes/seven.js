class Car {
  static companyName = "Tesla";
  static compareSpeed(carA, carB) {
    return carA.speed - carB.speed;
  }

  constructor(model, speed) {
    this.model = model;
    this.speed = speed;
  }
}

const car1 = new Car("X", 200);
const car2 = new Car("Y", 150);

console.log(Car.compareSpeed(car1, car2));
console.log(Car.companyName);
