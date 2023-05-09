console.log(typeof 10); // number

console.log(typeof 10n); // bigint

console.log(typeof Number("10")) // number

console.log(typeof Math.PI) // number

console.log(typeof Number("")) // number

let a = Number("");
console.log(a); // 0

let b = Number("Ten"); // NaN --> Not a Number
console.log(b); // NaN --> Not a Number

// let ten = Number(10);
// console.log(ten);


let input = "A";
// Read the value of the dropdown.
//"Show->    A - Great    --> Value "A"

let percentage = 0.00;

if (input == "A")
{
    percentage = 0.20;
}