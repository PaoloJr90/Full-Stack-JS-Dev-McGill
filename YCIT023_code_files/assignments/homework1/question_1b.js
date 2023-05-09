// run a for loop from 0 to 25 (inclusive) and divide each number by 3 and 5
// if the remainder is 0 for both divisors, print "FizzBuzz", 
// if the remainder is 0 when divided by 3, print "Fizz", 
// if the remainder is 0 when divided by 5, print "Buzz", 
// otherwise print the number
for (let number = 0; number <= 25; number++) {
    if (number % 3 == 0 && number % 5 == 0) {
      console.log(number, "FizzBuzz");
    } 
    else if (number % 3 == 0) {
      console.log(number, "Fizz");
    } 
    else if (number % 5 == 0) {
      console.log(number, "Buzz");
    } 
    else {
      console.log(number);
    }
  } 
  
 //testing other method
// for (let n = 0; n <= 25; n++) {
//   let output = "";
//   if (n % 3 == 0) output += n + "Fizz";
//   if (n % 5 == 0) output += n + "Buzz";
//   console.log(output || n);
// }

//testing another method
// for (let n = 1; n <= 25; n++) {
//   let output = "";
//   if (n % 3 == 0) output += n + "Fizz";
//   if (n % 5 == 0) output += n + "Buzz";
//   console.log(output && n);
// }