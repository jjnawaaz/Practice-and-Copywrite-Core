/**
 *  Constructor Functions and Prototypes:
Every function has a prototype property.
When using new, created object’s __proto__ 
points to that function’s prototype.
 */

function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log(`Hi Iam ${this.name}`);
};

const p1 = new Person("Junaid");
p1.sayHi();
