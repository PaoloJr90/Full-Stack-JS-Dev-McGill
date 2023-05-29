### Scope-Chain
#### References for study on scope-chain
[JS Lexical Scope Tutorial - freeCodeCamp](https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/) <br>
[What is Scope and Scope-Chain in JS - dev.to](https://dev.to/sumusiriwardana/what-is-scope-and-scope-chain-in-javascript-52j5) <br>
[Explain Scope and Scope-Chain in JS - geeksforgeeks](https://www.geeksforgeeks.org/explain-scope-and-scope-chain-in-javascript/)

---

In order to understand JavaScript's scope-chain, we must first understand what scope is. 

Scope is the context in which a variable is declared. There are three types of scope in JavaScript: global scope, function scope, and block scope. 

- Global scope is the outermost scope. Variables declared in global scope are accessible anywhere in the program.
- Function scope is the scope of a variable declared inside a function. Variables declared in function scope are accessible anywhere inside the function.
- Block scope is the scope of a variable declared inside a block. Variables declared in block scope are accessible anywhere inside the block.

```javascript
// global scope
function myFunction() {
  // function scope
  if (true) {
    // block scope
  }
}
```
---

The scope-chain is the hierarchy of scopes in which a variable is accessible. In essence, how JavaScript looks for and determines the value of a variable. 

When a variable is referenced, JavaScript will first look for the variable in the current scope. If the variable is not found, JavaScript will look for the variable in the next outer scope (upwards). This process will continue until the variable is found or the global scope is reached. If the variable is not found in the global scope, JavaScript will throw a ReferenceError.

Here is a simple example (from freeCodeCamp):
```javascript
// First fullName variable defined in the global scope:
const fullName = "Paolo Junior Angeloni";

// Nested functions containing two more fullName variables:
function profile() {
// function scope
  const fullName = "Paolo Junior";
  function sayName() {
    // function scope
    const fullName = "Angeloni";
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}
```

In the above example, the variable `fullName()` is declared in both the global scope, and the function scope (inside both `profile()` and `sayName()`). 

When `writeName` is called, JavaScript will first look for the variable in the current scope (`writeName`), then the next outer scope (`sayName`). If the variable is not found in `sayName`, JavaScript will look in the next outer scope (`profile`). If the variable is not found in `profile`, JavaScript will look in the next outer scope (global scope).

In the code snippet above, the `writeName()` and `sayName()` function calls will return `"Angeloni"`. 

Since those functions are nested within `profile()`, when `profile()` is called, the `sayName()` function will return `"Angeloni"`. When `sayName()` is called, the `writeName()` function will return `"Angeloni"`.

---

One more example (from dev.to):
```javascript
// Global scope
const userName = "Peter";

// Outer function
function calcAge(birthyear) {
    // function scope
  const currentYear = 2021;
  const age = currentYear - birthyear;

   // inner block
  if (age <= 60) {
    // block scope
    var working = true;
    const message = `Peter is still employed!`;
    console.log(message);
  }

  // inner function
  function yearsToRetire() {
    // function scope
    const retirement = 60 - age;
    console.log(`${userName} will be retired in ${retirement} years!`);
  }

  yearsToRetire();
}

calcAge(1975);
```

The variable `userName` is defined globally, so it can be accessed anywhere in the program. For example, the `yearsToRetire()` function can access the `userName` variable, even though it is not defined in the function scope. 

Moreover, the `yearsToRetire()` function can also access the `age` variable, even though it is not defined in the function scope. This is because the `yearsToRetire()` function is nested within the `calcAge()` function, which is the outer function.

Some other important points:
- The `working` variable is declared with the `var` keyword, so it is accessible anywhere in the function scope. `var` variables are not block-scoped; they are strictly function-scoped.
- The `message` variable is declared with the `const` keyword, so it is accessible anywhere in the block scope. `const` and `let` variables are block-scoped.
- the `if` block does not have access to the `retirement` variable, because of lexical scope (where the variables are defined/declared). 
- Scope-chain works upwards, not downwards or sideways.







