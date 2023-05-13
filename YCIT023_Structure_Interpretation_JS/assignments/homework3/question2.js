// test list from question 2
testList = [3, 4, 1, 4, 4, 2, 0, 4, 2, 0]
// another list with duplicates
newList = [1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 5, 6, 6, 7, 8, 8, 8, 8, 8, 9]

// function to remove duplicates from a list, convert set to array, and print the array.
function removeDuplicates(testList) {
    // create an empty set.
    nodupes = new Set();

    // loop through the list and add each element to the set.
    for (let i in testList) {
        nodupes.add(testList[i]);
    }
    
    // convert the set to an array\
    convert = Array.from(nodupes);
    // print the array.
    console.log(`The list with duplicates removed is: ${convert}`);
    
}
removeDuplicates(testList);