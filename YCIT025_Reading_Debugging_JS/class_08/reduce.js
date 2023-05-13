const numbers = [1, 2, 3, 4]
let sum = 0

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}
console.log(sum) // 10

// using reduce method of array
// reduce method syntax is as follows
// array.reduce(callback, initialValue)
// callback function syntax is as follows
// callback(accumulator, currentValue, currentIndex, array)
// accumulator is the value returned by the last iteration
// currentValue is the value of the current element
// currentIndex is the index of the current element. optional
// array is the array on which reduce method is called. optional

var numbers1 = [1, 2, 3, 4]

var sum1 = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
})

console.log(sum1) // 10

