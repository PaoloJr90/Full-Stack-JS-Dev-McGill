// challenge001 question on arrays and pre/post increment operators
"use strict";
const x = [4, 2];
// const x = [4, 2]

const sum = (++x[0] + x[1]++) - (x[0] + x[1])
//       (5 + 2) -           (5  + 3)
//          7                   8 = -1

console.log(x);
console.log('x[0]', x[0]);
console.log('++x[0]', ++x[0]);
console.log('x[0]', x[0]);

console.log("--------------------");

console.log('x[1]', x[1]);
console.log('x[1]++', x[1]++);
console.log('x[1]', x[1]);

console.log("=======================");
console.log('(++x[0] + x[1]++) - (x[0] + x[1])=', (++x[0] + x[1]++) - (x[0] + x[1]));