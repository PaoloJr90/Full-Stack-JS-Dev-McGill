function maxSubArraySum(arr, num) {

    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) {
        return null;
    }
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

// O(n)


// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 1)); // 8
// console.log(maxSubArraySum([], 5)); // null

