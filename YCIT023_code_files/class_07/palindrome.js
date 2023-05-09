//palindrome example. split() method splits a string into an array of substrings, and returns the new array. 
//reverse() method reverses the order of the elements in an array.
//toString() method returns a string representing the specified array and its elements.
//split string into array, reverse array, convert to string, compare to original string
//more simply, we could just compare the original string to the reversed string

let p = "TREE"
let p2 = "MADAM"
let p3 = "RACECAR"

function isPalindrome(word)
{
    //return word == word.reverse();

    const myarray = word.split("");
    //const reversed = word.split("").reverse();

    const reversed = myarray.reverse();

    return myarray.toString() == reversed.toString();
}

console.log(isPalindrome(p));