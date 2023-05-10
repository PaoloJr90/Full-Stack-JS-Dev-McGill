function same(arr1, arr2) {
  // O(1)
  if (arr1.length !== arr2.length) {
    return false;
  }

  //O(n) O(1) + O(n) = O(n)
  for (let i = 0; i < arr1.length; i++) {
    // O(n)
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // O(1)
    if (correctIndex == -1) {
      return false;
    }

    // O(n)  O(2n+1)  =O(n)
    arr2.splice(correctIndex, 1);
  }

  return true;
} // O(n) * O(n) = O(n^2)

console.log(same([1, 2, 3], [1, 4, 9]));
console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 1, 4]));
