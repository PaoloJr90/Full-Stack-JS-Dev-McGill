function print() {
  console.log(a);
}

function callThePrinter() {
  var a = 1;
  print();
}

var a = 2;
callThePrinter();
