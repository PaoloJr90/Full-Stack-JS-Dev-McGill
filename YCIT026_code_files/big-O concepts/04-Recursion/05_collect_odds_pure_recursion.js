function collectOddValues(arr) {
    const newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    return [...newArr, ...collectOddValues(arr.slice(1))];
}

const result = collectOddValues([1, 2, 3, 4, 5])

console.log(result);



