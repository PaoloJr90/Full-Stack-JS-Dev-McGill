// examples of var, let, const definitions
// all are variable declarations
// var is function scoped
// let and const are block scoped

"use strict";
var var1;
console.log(var1);
var var1 = 44;
console.log(var1);
var1 = "Jason";
console.log(var1);
/////
let var2;
console.log(var2);
var2 = 44;
console.log(var2);
var2 = "Jason";
console.log(var2);
/////

const var3 = '44';
console.log(var3);

///

const testConst = {
    name: 'jason'
};
console.log(testConst);

testConst.name = 'Jason1';
console.log(testConst);
testConst.family = 'Jafari';
console.log(testConst);