// ⚙️ Looping Dynamically through Object using Object.entries():

const user = { name: "John", age: 22, city: "Pune" };

Object.entries(user).forEach(([key, value]) => console.log(key, value));
