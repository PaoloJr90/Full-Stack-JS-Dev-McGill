// page 60 exercises
let x = 5;

x == 8; // false
x == 5; // true
x == '5'; // true. 5 becomes '5' when compared to '5'
x === 5; // true. === is strict equality. It checks for type and value
x === '5'; // false. '5' is a string, 5 is a number. === is strict equality. It checks for type and value
x != 8; // true
x !== 5; // false. !== is strict inequality. It checks for type and value
x !== '5'; // true. !== is strict inequality. It checks for type and value
x !== 8; // true
x > 8; // false
x < 8; // true
x >= 8; // false
x <= 8; // true


// page 67 exercises
console.log(false || (true && false)); // false. && has higher precedence than ||. So, true && false is evaluated first. Then, false || false is evaluated.
console.log(true || (1 + 2)); // true. + has higher precedence than ||. So, 1 + 2 is evaluated first. Then, true is returned.
console.log((1 + 2) || true); // 3. + has higher precedence than ||. So, 1 + 2 is evaluated first. Then, 3 is returned.
console.log(true && (1 + 2)); // 3. + has higher precedence than &&. So, 1 + 2 is evaluated first. Then, 3 is returned.
console.log(false && (1 + 2)); // false. + has higher precedence than &&. So, 1 + 2 is evaluated first. Then, false is returned.
console.log((1 + 2) && true); // true. + has higher precedence than &&. So, 1 + 2 is evaluated first. Then, true is returned.
console.log((32 * 4) >= 129); // false. * has higher precedence than >=. So, 32 * 4 is evaluated first. Then, 128 >= 129 is evaluated.
console.log(false !== !true); // false. ! has higher precedence than !==. So, !true is evaluated first. Then, false !== false is evaluated.
console.log(true === 4); // false. === is strict equality. It checks for type and value. 4 is a number, true is a boolean. So, false is returned.
console.log(false === (847 === '847')); // true. === is strict equality. It checks for type and value. 847 is a number, '847' is a string. So, false === false is returned.
console.log(false === (847 == '847')); // false. == is loose equality. It checks for value only. 847 is a number, '847' is a string, but their values are the same. So, false === true is returned. And then, false is returned.
console.log(!true || (!(100/5) === 20) || ((328 / 4) === 82) || false);
// (328 / 4) === 82 is true. So, true is returned.
// (!(100/5) === 20) is false. So, false is returned.
// (!true || false) is false. So, false is returned.
// !true || false || true || false is true. So, true is returned.


// AND(&&) Operator cheatsheet.
// true && false = false;
// false && false = false;
// true && true = true;

// OR(||) Operator cheatsheet.
// true || false = true;
// false || false = false;
// true || true = true

// short version of operators cheatsheets above
// false && anything = false;
// true || anything = true;

//BODMAS
// Brackets (Parentheses) - ()
// Order - Exponents - **
// Division - /
// Multiplication - *
// Addition - +
// Subtraction - -