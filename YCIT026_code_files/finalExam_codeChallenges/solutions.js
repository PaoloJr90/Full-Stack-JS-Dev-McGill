// Task1
export function findDifferenceMaxAndMin(arrayInput) {
  // Task1 solution
  // fina max value from arrayInput
  function findMax(arrayInput) {
    let max = arrayInput[0];
    for (let i = 0; i < arrayInput.length; i++) {
      if (max < arrayInput[i]) {
        max = arrayInput[i];
      }
    }
    return max;
  }
  // find min value from arrayInput
  function findMin(arrayInput) {
    let min = arrayInput[0];
    for (let i = 0; i < arrayInput.length; i++) {
      if (min > arrayInput[i]) {
        min = arrayInput[i];
      }
    }
    return min;
  }
  // return difference between max and min
  return findMax(arrayInput) - findMin(arrayInput);
}

// Task2
export function findTargetFromUniqueSortedArray(arrayOfNumbers, target) {
  // Task2 solution
  // remove duplicate from arrayOfNumbers using Set
  const uniqueArray = [...new Set(arrayOfNumbers)];

  // sort uniqueArray using merge sort
  function merge(left, right) {
    let resultArray = [],
      leftIndex = 0,
      rightIndex = 0;
    // compare left and right arrays and push the smaller value to resultArray
    while (leftIndex < left.length && rightIndex < right.length) {
      if (right[rightIndex] > left[leftIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
    // push the rest of left array to resultArray
    while (leftIndex < left.length) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    }
    // push the rest of right array to resultArray
    while (rightIndex < right.length) {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
    return resultArray;
  }

  // recursive merge sort
  function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
    let middle = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, middle));
    let right = mergeSort(array.slice(middle));
    return merge(left, right);
  }

  // find target index from mergeSort using binary search
  function binarySearch(array, target) {
    let start = 0; // start index
    let end = array.length - 1; // end index

    while (start <= end) {
      let middle = Math.floor((start + end) / 2);

      if (array[middle] === target) {
        // found target, return index
        return middle;
      } else if (array[middle] < target) {
        // continue searching right side
        start = middle + 1;
      } else {
        // continue searching left side
        end = middle - 1;
      }
    }
    // if target not found, return -1
    return -1;
  }

  // return target index from sorted array
  return binarySearch(mergeSort(uniqueArray), target);
}

// Task3-1
export function isPrime(input) {
  // Task3-1 solution
  // check if input is prime number
  if (input === 1) {
    return true;
  } else if (input === 2) {
    return true;
  } else {
    for (let i = 2; i < input; i++) {
      if (input % i === 0) {
        return false;
      }
    }
    return true;
  }
}

// Task3-2
export function findGcd(number1, number2) {
  // Task3-2 solution
  // find gcd value from number1 and number2

  if (number2 === 0 || number1 === 0) {
    return number1;
  } else {
    // use recursive function that calls itself by passing number2 and number1 % number2
    return findGcd(number2, number1 % number2);
  }
}

// Task3-3
export function primeFactors(number) {
  // Task3-3 solution
  // find prime factors from number

  // create empty array to store prime factors
  let primeFactorArray = [];
  // loop through number and find prime factors
  for (let i = 2; i <= number; i++) {
    if (number % i === 0 && isPrime(i)) {
      // push prime factors to primeFactorArray
      primeFactorArray.push(i);
    }
  }
  return primeFactorArray;
}

// Task3-4
export function findGcdAndDecomposeToPrimeFactors(number1, number2) {
  // Task3-4 solution
  // hint gdcValue value is product of findGcd
  // hint primeFactorArray is product of primeFactors(gdcValue)
  // find gcd value from number1 and number2 using findGcd function
  let gcdValue = findGcd(number1, number2);
  // find prime factors from gcdValue using primeFactors function
  let primeFactorArray = primeFactors(gcdValue);
  // return gcdValue and primeFactorArray
  return { gdcValue: gcdValue, primeFactorArray: primeFactorArray };
}
