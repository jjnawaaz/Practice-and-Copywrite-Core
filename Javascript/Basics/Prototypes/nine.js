// Polymorphism and Method Overriding

class Animal {
  speak() {
    console.log("Animal Speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog Barks");
  }
}

const dog = new Dog();
dog.speak();
