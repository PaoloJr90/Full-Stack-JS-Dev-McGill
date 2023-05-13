function sumZero(arr) {

    let start = 0;
    let end = arr.length - 1;

    while(start < end){
        let sum = arr[start] + arr[end];
        if(sum == 0){
            return [arr[start], arr[end]]
        } else if( sum > 0){
            end --;
        } else {
            start ++
        }
    }
    
}

// O(n)


// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-2, 1, 3]));
// console.log(sumZero([1, 2, 3]));
