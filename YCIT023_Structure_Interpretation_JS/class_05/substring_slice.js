//using slice() method - slice() uses index instead of length
let myname = "Brendan Wood";

let mylastname = myname.slice(8,13); // From the 8th character, count 5 characters.
let mylastname2 = myname.slice(-4); // -4 is the same as 8. From the end of the string, count 4 characters.
let mylastname3 = myname.slice(-4, -1); // -4 is the same as 8. From the end of the string, count 4 characters. Subtract 1 from the end of the string.

console.log(mylastname); // Wood
console.log(mylastname2); // Wood
console.log(mylastname3); // Woo
console.log(myname); // Brendan Wood

// 0() time complexity vs. space complexity

let mytext = "XT12345";

let mytext2 = mytext.slice(-5); // 12345. -5 is the same as 2. From the end of the string, count 5 characters.
let mytext3 = mytext.slice(2); // 12345. From the 2nd character, count the rest of the string.

console.log(mytext2); // 12345
console.log(mytext3); // 12345

//practice example (slice() vs. substr() vs. substring()) - substring() is same as slice(), but can't use negative numbers
//                                                          substr() uses length instead of index
let mytext4 = "The quick brown fox jumps over the lazy dog.";

let mytext5 = mytext4.slice(4, 9); // returns "quick"
let mytext7 = mytext4.substring(4, 15); // returns "quick brown"
let mytext6 = mytext4.substr(4, 5); // returns "quick"

console.log(mytext5); // quick
console.log(mytext7); // quick brown
console.log(mytext6); // quick

// example of function using slice() method
function p(val)
{
    console.log(val);
}

function main()
{
    let a = "The quick brown" 

    p(a.slice(4, 9))

    p(a.substr(4, 5))
}

main()
