/**
 * Question 3: Check Inherited vs Own Property
Task:

Consider this object:

const obj = Object.create({ inheritedProp: "I am inherited" });
obj.ownProp = "I am own property";
👉 Check whether "ownProp" and "inheritedProp" are own properties of obj. Print true or false.

true
false
 */

const obj = Object.create({
  inheritedProp: "Iam inherited",
});

obj.ownProp = "Iam own property";

console.log(obj.hasOwnProperty("inheritedProp"));
console.log(obj.hasOwnProperty("ownProp"));
