function maxSubArraySum(arr, num) {

    if (num > arr.length) {
        return null;
    }

    let max = -Infinity;

    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j]
        }
        if(temp > max){
            max = temp;
        }
    }

    return max;
}

// O(n^2)


// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 1)); // 8
// console.log(maxSubArraySum([], 5)); // null

