// Task1
// https://jasonjafari.notion.site/Frequency-Counter-eecdaa7e0ca84a96af0ec278719f07f6
// Task 1 solution
export function areTowValuesAnagram(s1, s2) {
  // create two empty arrays for later comparison
  const s1Array = [];
  const s2Array = [];

  // check if the length of two strings are equal. If not, they cannot be anagrams
  if (s1.length !== s2.length) return "Not Anagram";

  // push each character of the strings into the empty arrays
  for (let i = 0; i < s1.length; i++) {
    s1Array.push(s1[i]);
    s2Array.push(s2[i]);
  }

  // compare the two newly-created arrays by sorting them and joining them into strings
  const compareArrays = (s1Array, s2Array) => {
    if (s1Array.sort().join("") === s2Array.sort().join("")) return "Anagram";
    else return "Not Anagram";
  };
  return compareArrays(s1Array, s2Array);
}

// time O(n log n). n is equal to the length of the strings. The sort method is O(n log n).
// I believe this code can be improved to O(n) by simply comparing the two strings with includes() method
// space O(n). The space complexity is O(n) because we are creating two arrays of the same length as the strings
// the space complexity is such because it is dependant on the length of the (parameter) strings

// Task2
// https://jasonjafari.notion.site/Multiple-Pointes-Contains-Duplicate-1acceaddc37746acaf69ae7d84de42ed
// Task2 solution
export function containsDuplicate(nums) {
  // test if the array is empty. If so, return false
  if (nums.length === 0) return false;

  // creat an object to store the key-value pairs of the array
  let count = {};
  nums.forEach(function (i) {
    count[i] = (count[i] || 0) + 1; // count[i] || 0 is a short way of saying if count[i] is undefined, set it to 0
  });

  // check if the values of the object keys are greater than 1. If so, return true
  // Object.values() returns an array of a given object's own enumerable property values
  // some() tests whether at least one element in the array passes the test implemented by the provided function
  if (Object.values(count).some((value) => value > 1)) return true;
  else return false;
}

// time O(n). n is equal to the length of the array. The forEach method is O(n). The some method is O(n).
// space O(n). The space complexity is O(n) because we are creating an object of the same length as the array
// the space will be dependant on the input array (nums).

// Task3
// https://jasonjafari.notion.site/Sliding-Window-maxSubarraySum-b400bee7645a4a48b22d29a848dc5f68
// Task3 solution
export function maxSubarraySum(arr, num) {
  // check if the length of the array is less than the num. If so, return null
  if (arr.length < num) return null;

  // create a variable to store the max sum
  let maxSum = 0;

  // create a variable to store the temp sum
  let tempSum = 0;

  // loop through the array and add the first n numbers together
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // set the temp sum to the max sum.
  // this is done so that we can compare the temp sum to the max sum later
  tempSum = maxSum;

  // loop through the array starting from the nth number
  for (let i = num; i < arr.length; i++) {
    // subtract the first number from the temp sum and add the next number
    // we do this to move the window. The window is the length of the num
    tempSum = tempSum - arr[i - num] + arr[i];

    // check if the temp sum is greater than the max sum. If so, set the max sum to the temp sum
    if (tempSum > maxSum) maxSum = tempSum;
  }
  return maxSum;
}

//time O(n). n is equal to the length of the array. The first for loop is O(n). The second for loop is O(n).
// the for loops are not nested.

// space O(1). it is such as we are only creating two variables (maxSum and tempSum) regardless of the length of the array
