console.log(Number("Six")); // NaN --> Not a Number

console.log(parseInt("Six")); // NaN --> Not a Number

console.log(parseInt("10.10")); // 10

console.log(parseFloat("10.101")); // 10.101

console.log(parseInt("10 years")); // 10

console.log(parseInt("years 10")); // NaN

// let a = parseInt("Six");

// if (a == NaN) {
//     console.log("Not a Number");
// }

// "6" == 6
// 6 === 6

const tips = {"a":.20, "b":.15, "c":.10, "d":.05};

let chosen_tip = "B";
let tip_percentage = tips[chosen_tip];
console.log(tip_percentage);


// =     ==   ===

if (a == NaN)
{
    // Error during convert
}
