let cc_num = "4560 1234 2345 3456";
let last4 = cc_num.slice(-4); // slice() extracts a part of a string and returns the extracted part in a new string.

let padded = last4.padStart(cc_num.length, "*"); // padStart() adds characters to the beginning of a string.

console.log(padded); // ************3456

//instead of using slice() and padStart() we can use replace() method
//insert method into a function below:

function mask_ccnum(credit_card_num) {
    let last4 = cc_num.slice(-4);
    let padded = last4.padStart(cc_num.length, "*");
    return padded;
}

let credit_card_num = "4560 1234 2345 3456";
console.log(mask_ccnum(credit_card_num)); // ************3456


// let val = 'A'
// let newval = val.padStart(10, "X")
// console.log(newval)