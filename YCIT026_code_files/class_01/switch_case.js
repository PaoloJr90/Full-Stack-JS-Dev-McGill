// switch statement will check for strict equality (===) by default
// strict equality means a value and its type must be the same

// const x = 10;
// switch (x) {
//   case "10":
//     const type = "string";
//     console.log(`x is not a number, but a ${type}`);
//     break;
//   case 10:
//     const type = "number";
//     console.log(`x is a ${type}`);
//     break;
// }
// this will result in a SyntaxError: Identifier 'type' has already been declared

// error above is fixed by using let instead of const
// let is declared outside the switch statement
// let can be redeclared inside the switch statement
// const x = 10;
// let type;
// switch (x) {
//   case "10":
//     type = "string";
//     console.log(`x is not a number, but a ${type}`);
//     break;
//   case 10:
//     type = "number";
//     console.log(`x is a ${type}`);
//     break;
// }

// second solution is to use block scope
// still using const for the type variable
// const x = 10;
// switch (x) {
//     case "10":
//         {
//             const type = "string";
//             console.log(`x is not a number, but a ${type}`);
//             break;
//         }
//     case 10:
//         {
//             const type = "number";
//             console.log(`x is a ${type}`);
//             break;
//         }
// }

// loose quality (==) will convert the type of the variable
// here the type of x is a number
// but the type of "10" is a string
// loose equality will convert the type of "10" to a number
// loose equality will convert the type of x to a string
// therefore the switch statement will print out "x is not a number, but a string"
const x = 10;
if (x == "10") {
  const type = "string";
  console.log(`x is not a number, but a ${type}`);
} else {
  const type = "number";
  console.log(`x is a ${type}`);
}

// strict equality (===) will not convert the type of the variable
// here the type of x is a number
// but the type of "10" is a string
// strict equality will not convert the type of "10" to a number
// strict equality will not convert the type of x to a string
// therefore the switch statement will print out "x is a number"
// strict equality will compare value and type
// const x = 10;
// if (x === "10") {
//   const type = "string";
//   console.log(`x is not a number, but a ${type}`);
// } else {
//   const type = "number";
//   console.log(`x is a ${type}`);
// }
