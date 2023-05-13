// "use strict";
const var1 = {};
const var2 = [];

// {} + [];
// what is the result of the code above?
console.log(var1 + var2);

console.log(+ []);
console.log(+ {});
console.log(+ "1");
console.log(+ "1.4555");
console.log(+ "$1.4555");
console.log(+ "1.4555$");
console.log(parseFloat("1.4555$"));
console.log(parseFloat("$1.4555"));
console.log(new Number("1.4555s"));