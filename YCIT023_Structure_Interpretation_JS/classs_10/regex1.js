// using regex to validate phone numbers using test method
const phoneRegex = /(\d{3})-(\d{3})-(\d{4})/;

let isValid = phoneRegex.test('123-456-7890'); // true

console.log(isValid);
// another console.log option
console.log(`The phone number is ${isValid}`);


// using regex to validate phone numbers using exec method
let phoneParts = phoneRegex.exec('123-456-7890');

// exec returns an array with the phone number parts
console.log(phoneParts);
// using the array index to get the area code
console.log(`Area code is ${phoneParts[1]}`);



