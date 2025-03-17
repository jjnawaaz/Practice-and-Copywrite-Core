// Call Stack

function a() {
  console.log("a");
}

function b() {
  a();
  console.log("b");
}
b();
