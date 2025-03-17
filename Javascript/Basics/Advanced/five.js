/**
 * 3. call, apply, bind usage (Practical patterns)
call: Call a function with a different this.
apply: Same as call, but arguments in array.
bind: Returns a new function with this bound.
 */

const user = {
  name: "Junaid",
};

function greet(age) {
  console.log(`Hello ${this.name}. You are ${age}`);
}

greet.apply(user, [27]); // .apply(object,[])
greet.call(user, 27); // .call(Object,args)

// Bind
const userfunc = greet.bind(user);
userfunc(27);
