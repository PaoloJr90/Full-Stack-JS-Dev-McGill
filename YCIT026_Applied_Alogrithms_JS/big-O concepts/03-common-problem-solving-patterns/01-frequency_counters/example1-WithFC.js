function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    arr1.forEach(item => {
        frequencyCounter1[item] = (frequencyCounter1[item] || 0) + 1
    });

    arr2.forEach(item => {
        frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1
    });

    for (let key in frequencyCounter1){

        if(!frequencyCounter2[key**2]){
            return false;
        }

        if(frequencyCounter2[key**2] != frequencyCounter1[key]){
            return false;
        }
    }
   
    return true
}

// O(n)


// console.log(same([1, 2, 3], [1, 4, 9]));
// console.log(same([1, 2, 3], [4, 1, 9]));
// console.log(same([1, 2, 3], [1, 9]));
// console.log(same([1, 2, 1], [4, 1, 4]));

