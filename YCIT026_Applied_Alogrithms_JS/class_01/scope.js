// let and const are block scoped
// within a block, the variable is only available within the block
// var is function scoped
// var let and const are similar when declared inside a function

// global scope is the scope outside of a function

// const x = 10;
// function getX() {
//     console.log(x);

//     const y = 20;
// }

// getX();
// // console.log(y); // error

// Global Scope
// const nameVar = "Diego";
// function func() {
//     console.log(nameVar); // Diego
// }
// func();

// Global Scope
// function getUser() {

// Local Scope
//     const user = "Mario";
//     console.log(user);
// }

// getUser();   // Mario
// // console.log(user); // ReferenceError: user is not defined

// Global Scope
// const name = "John1";
// function func1() {
//     // Local Scope #1
//     const name = "John";

//     function func2() {
//         // Local Scope #2
//         const lastname = "Doe";
//         console.log(`${name} ${lastname}`);
//     }
//     func2();
// }

// func1(); // John Doe

// function func1() {
//     function func2() {
//         const x = 10;
//     }

//     console.log('1');
//     // console.log(x);
// }

// func1(); // ReferenceError: x is not defined

{
  let x = 29;
  {
    console.log(x);
  }
}
console.log(x);
