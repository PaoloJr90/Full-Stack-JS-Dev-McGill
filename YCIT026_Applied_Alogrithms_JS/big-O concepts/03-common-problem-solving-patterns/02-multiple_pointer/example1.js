function sumZero(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] == 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

// O(n^2)


// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-2, 1, 3]));
// console.log(sumZero([1, 2, 3]));
