function same(arr1, arr2) {
  // 1
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  //n
  arr1.forEach((item) => {
    frequencyCounter1[item] = (frequencyCounter1[item] || 0) + 1;
  });
  // 1 + n + n + n = 1 +3n => O(n)
  //n
  arr2.forEach((item) => {
    frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1;
  });

  //n
  for (let key in frequencyCounter1) {
    // 1
    if (!frequencyCounter2[key ** 2]) {
      return false;
    }

    //1
    if (frequencyCounter2[key ** 2] != frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3, 1, 2], [1, 4, 9, 1, 4]));
// console.log(same([1, 2, 3], [4, 1, 9]));
// console.log(same([1, 2, 3], [1, 9]));
// console.log(same([1, 2, 1], [4, 1, 4]));

// O(n^4) O(n^2 * n^2)
