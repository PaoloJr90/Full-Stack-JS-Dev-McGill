# Frequency Counters

## [example1](https://javascript.plainenglish.io/frequency-counter-algorithm-b3fa98efe8ba)
## [example2](https://medium.com/@samip.sharma963/problem-solving-pattern-frequency-counter-javascript-c7d30889f103)

This pattern uses objects or sets to collect values/frequencies of values.

This can often avoid the need for nested loops or O(n^2) operations with arrays / strings

## Example
```JavaScript
// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
//The frequency of values must be the same. 

// same([1, 2, 3], [1, 4, 9]); // true
// same([1, 2, 3], [4, 1, 9]); // true
// same([1, 2, 3], [1, 9]); // false ()
// same([1, 2, 1], [4, 1, 4]); // false (must be same frequency)

```
