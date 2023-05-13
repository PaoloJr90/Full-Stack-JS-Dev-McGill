"use strict";
const var1 = 9;
const var2 = [9];
const var3 = var2.toString();
const var4 = '9';

// what gets logged?
// alert(9 == [9]); // true

console.log('var1',var1);
console.log('var2',var2);
console.log('var3',var3);
console.log('var4',var4);
console.log('typeof var1', typeof var1);
console.log('typeof var2', typeof var2);
console.log('typeof var3', typeof var3);
console.log('typeof var4', typeof var4);
console.log('var1 == var2', var1 == var2);
console.log('var1 == Number(var2.toString()', var1 == Number(var2.toString()));
console.log('var1 === var2', var1 === var2);
console.log('var1 == var3', var1 == var3);
console.log('var1.toString() === var3', var1.toString() === var3);
console.log('var1.toString() === var2', var1.toString() === var2);


const var5 = [9, 1];

console.log('var1 == var5', var1 == var5);
console.log('9,1 == var5', '9,1' == var5);
console.log('9,1 === var5', '9,1' === var5);