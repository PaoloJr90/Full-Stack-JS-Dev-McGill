# Sorting

Rearranging the items in a collection(e.g. an array)

### [15 Sorting Algorithms in 6 Minutes](https://www.youtube.com/watch?v=kPRA0W1kECg)




## Builtin Javascript Sorting Algorithms

```javascript
const arr = [...otherArray];

arr.sort()
```
```javascript
const arr = [...otherArray];

arr.sort((a, b)=> {
    // logic for sorting
})
```
Examples:
```javascript
const  numberCompare = (num1, num2) => {
  return num1 - num2;
}

[ 6, 4, 15, 10 ].sort(numberCompare);
// [ 4, 6, 10, 15 ]
```

```javascript
const compareByLen = (str1, str2) => {
  return str1.length - str2.length;
}

[ "Jason", "Sarah", "Mohsen", "Ali" ]
  .sort(compareByLen);
```

<hr />

## Bubble sort

A sorting algorithm where the largest values bubble up to the top

[https://visualgo.net/en/sorting](https://visualgo.net/en/sorting)

<br />

[Useful video](https://www.youtube.com/watch?v=uJLwnsLn0_Q)


<br />

[Useful video](https://www.youtube.com/watch?v=xli_FI7CuzA)



<hr />
Many sorting algorithms involve some type of swapping functionality (e.g. swapping to numbers to put them in order)

```javascript
// ES5
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}
```

<hr />

```javascript
// UNOPTIMIZED VERSION OF BUBBLE SORT
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function bubbleSort(arr) {

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);
```


```javascript

// Optimized BubbleSort with noSwaps
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};


function bubbleSort(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
        noSwaps = true;
        for(var j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);
```

O(n^2)

<hr />

## Selection sort

[https://visualgo.net/en/sorting](https://visualgo.net/en/sorting)

<br />

[Useful video](https://www.youtube.com/watch?v=g-PGLbMth_g)


```javascript
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// ES2015 VERSION
function selectionSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0,2,34,22,10,19,17]);
```

O(n^2)

<hr />

## Insertion sort

[https://visualgo.net/en/sorting](https://visualgo.net/en/sorting)
<br />

[Useful video](https://www.youtube.com/watch?v=nKzEJWbkPbQ&list=RDLVuJLwnsLn0_Q&index=2)

<br />

[Useful video](https://www.youtube.com/watch?v=JU767SDMDvA)


```javascript
function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])
```

O(n^2)

<hr />

## [Comparing sort Algorithms](https://www.gyanblog.com/coding-interview/list-sorting-algorithms/)

<br />

[visual check](https://www.toptal.com/developers/sorting-algorithms)

<hr />

## Merge sort algorithms

<br />

[https://visualgo.net/en/sorting](https://visualgo.net/en/sorting)

<br />

[Useful video](https://www.youtube.com/watch?v=4VqmGXwpLqc)


### merge 2 sorted array arrays implementation

```javascript
// Merges two already sorted arrays
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(
        i < arr1.length
        && j < arr2.length
    ){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}
merge([100,200], [1,2,3,5,6])
```

### merge sort implementation

```javascript
// Merge function from earlier
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(
        i < arr1.length
        && j < arr2.length
    ){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort([10,24,76,73])
```
O(n log n)

<br />

[Comparing sort Algorithms](https://www.gyanblog.com/coding-interview/list-sorting-algorithms/)

<hr />

and many more sorting algorithms


<br />

[Interesting video ](https://www.youtube.com/watch?v=qk7b4-iyCJ4)