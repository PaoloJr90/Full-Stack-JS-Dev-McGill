let arr = [1, 2, 3, 4, 5, -4, -6, -7, -8];
let arr2 = [1, 2, 3, 4, 5, 0];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    sum += arr[i];
  }
}

let sum2 = 0;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] < 0) {
    sum2 += arr2[i];
  }
}

console.log(sum);
console.log(sum2);
