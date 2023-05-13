// step 1: generate an array with random number between 1 and 100. The array will have at least 100 elements.
// step 2: process the array with a looping structure. The loop will iterate through the array and print out the following:
// average of all numbers in the array
// highest and lowest numbers in the array
// number of even numbers in the array
// number of odd numbers in the array

function main () {
    // name variables and constant (numArray) values
    const numArray = [];
    let sum = 0;
    let num = 105;
    let min = 0;
    let max = 0;
    
    function createArray(numArray) {
        //create array
        for (let i = 0; i < num; i++) {
            numArray.push(Math.floor(Math.random() * 100) + 1);
        }
        return numArray;
    }
    console.log("Number of elements in the array = ", createArray(numArray).length);
    
    //for loop to find sum of array elements
    function sumArray(sum) {
        for (let value of numArray) {
            sum += value;
        } 
        return sum;   
    }
    console.log("Sum of array elements = ", sumArray(sum));

    //for loop to find average of array elements
    function getAverage() {
        return (sumArray(sum) / numArray.length).toFixed(2);
    }
    console.log("Average of array elements = ", getAverage());

    //for loop to find min values in array
    function getMinValue(min) {
        for (let i = 0; i < numArray.length; i++) {
            if (numArray[i] < min)
                min = numArray[i];
        }
        return min;
    }
    console.log("The lowest number in the array = ", getMinValue(min));

    //for loop to find max values in array
    function getMaxValue(max) {
        for (let i = 0; i < numArray.length; i++) {
            if (numArray[i] >= max)
                max = numArray[i];
        }
        return max;
    }
    console.log("The highest number in the array = ", getMaxValue(max));

    function getEven() {  
        let even = [];
        //for-of loop to find number of even  values
        for (let evenNumber of numArray) {
            if (evenNumber % 2 == 0) {
                even.push(evenNumber);
            }
        }
        //console.log(even);
        return even.length;

    }
    console.log("Number of even values = ", getEven());

    function getOdd() {
        let odd = [];
        //for-of loop to find number of odd  values
        for (let oddNumber of numArray) {
            if (oddNumber % 2 != 0) {
                odd.push(oddNumber);
            }
        }
        //console.log(odd);
        return odd.length;
    
}
console.log("Number of odd values = ", getOdd());
}

main();
