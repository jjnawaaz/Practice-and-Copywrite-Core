// Scopes and Block errors

function outer() {
  var x = 10;
  if (true) {
    let y = 20;
    console.log(x, y); // ?
  }
  console.log(y); // ?
}
outer();
