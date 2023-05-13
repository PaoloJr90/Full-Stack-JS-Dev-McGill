# [Sliding Window](https://www.geeksforgeeks.org/window-sliding-technique/)

This pattern involves creating a window which can either be an array or number from one position to another.

Depending on a certain condition, the window either increases or closes (and a new window is created).

Very useful for keeping track of a subset of data in an array/string etc.



## Example
```JavaScript
// Write a function called maxSubArraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.
// Return an array that includes both values that sum to zero or undefined if pair does not exist.

// maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
// maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
// maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 1); // 8
// maxSubArraySum([], 5); // null

```


### [More practice](https://leetcode.com/problems/find-all-anagrams-in-a-string/discuss/92007/Sliding-Window-algorithm-template-to-solve-all-the-Leetcode-substring-search-problem)


### [More practice](https://www.techiedelight.com/sliding-window-problems/)

 