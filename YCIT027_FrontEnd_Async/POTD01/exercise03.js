// Data Extraction on multi-dimensional arrays

// sample array
let raw_array = [
  [200, 50, 300, 5],
  [10, 25, 7, 100],
  [25, 20, 70, 45],
  [500, 170, 11, 35],
];

const extractedSubArray = (raw_array, row, s, e) => {
  // declare ans as an empty array (undefined)
  let ans;

  // error-handling for invalid input
  // else return the subarray (ans)
  if (
    row < 0 ||
    row >= raw_array.length ||
    s < 0 ||
    s >= raw_array[row].length ||
    e < 0 ||
    e >= raw_array[row].length ||
    s > e
  ) {
    console.log(ans);
    return undefined;
  } else {
    ans = [];
    for (let i = s; i <= e; i++) {
      ans.push(raw_array[row][i]);
    }
    console.log(ans);
    return ans;
  }
};

extractedSubArray(raw_array, 1, 0, 2);
