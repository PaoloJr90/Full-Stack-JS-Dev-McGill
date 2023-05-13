let a = "BrendanBrendan"; 
let found = a.charAt(10); // returns "d"
let found2 = a[10]; // returns undefined

console.log("1"); 
console.log(found);

console.log("2");
console.log(found2);

console.log(a.indexOf("dan")); // returns 4
console.log(a.indexOf("xyz")); // returns -1
console.log(a.lastIndexOf("dan")); // returns 11 
console.log(a.startsWith("Bren")); // returns true

console.log(a.indexOf("xyz")); 
console.log(a.startsWith("Bren"));

// example with if statement
let searchResult = a.indexOf("rex");
if (searchResult >= 0)
{
    console.log("Found!");
}
else
{
    console.log("Error, search term not found.")
}
