# some lectures' notes 🍎

**Programming languages can have both compiled and interpreted implementations:** <br>

### _Interpreted languages:_ <br>

**Advantages:**

- more flexible (more platform-independent)
- offer dynamic typing
- generally smaller program size

**Disadvantages:** <br>

- slow execution speed
- more difficult to report source code errors

### _Compiled languages:_ <br>

**Advantages:** <br>

- compiled code executes faster than interpreted code
- easier debugging: from source code to compiler (before translation to machine code and output), programmer can see errors

**Disadvantages:** <br>

- added time needed to complete entire compilation step before testing
- platform dependence of the generated binary code

<br>
<br>

## some other rules: 📃 <br>

- Add semicolon at the end of each executable statement
- avoid not passing parameters in functions
  - always pass parameters!
- Define all variables!

  - Avoid using same variable names expecting different scopes (block, global etc.) to distinguish/define them.
  - Const cannot be overwritten (will result in an execution error)
  - Var can be overwritten
  - Use let instead of var
    - Var is an older statement for variable assignment. Let is the ES6 standard for variable assignment. It can be overwritten.

- avoid creating global variables
  - create them in local (block/function) scope instead

<br>

- **Three types of scope in JS:**

  - _Block scope_
    - let - variables inside block cannot be accessed outside block
    - Var does not have have block scope. It is function scoped.
    - Using var - variables inside block can be accessed outside block
      - Does not enforce block scope
  - _Function scope_
    - Variables defined inside a function are not accessible (visible) from outside the function.
    - Local variables have function scope and can only be access within the function.
  - _Global scope_

<br>

- **Regex:** <br>
  - language (not a programming language) that describes a pattern
    - expected --> used for validation
    - describe something to search for
    - describe something to replace
  - programming languages have different dialects of Regex
  - example: /regex here/
