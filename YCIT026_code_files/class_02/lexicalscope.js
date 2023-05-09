function print() {
  console.log(a);
}
print();

console.log("================================================");

function callThePrinter() {
  var a = 1;
  print();
}
// var a will be updated to 2
var a = 2;
// callthePrinter() will print 2
callThePrinter();

console.log("================================================");

function callThePrinter2() {
  var a2 = 1;
  function print2() {
    console.log(a2);
  }
  print2();
}
// var a2 will be updated to 2. This will not affect the print2() function.
var a2 = 2;
// callthePrinter2() will print 1.
// This is because the print2() function is defined inside the callThePrinter2() function.
// The print2() function has access to the a2 variable defined inside the callThePrinter2() function.
// The print2() function does not have access to the a2 variable defined outside the callThePrinter2() function.
callThePrinter2();
