// create an array provided by the question
const array = [3, 4, 1, 4, 4, 2, 0, 4, 2, 0]

function findDuplicates(array) {
    //create unique and dupes sets
    unique = new Set();
    dupes = new Set();

    // for-of loop to iterate through the array
    for (let i of array) {
        // use forEach. If value in unique is equal to i, add i to dupes.
        unique.forEach(function (value) {
            if (value === i) {
                dupes.add(i);
            }
        });
        // add i to unique set.
        unique.add(i);
    }
    // convert dupes set to an array and print it.
    // console.log(dupes);
    console.log(`The duplicate values are: ${Array.from(dupes)}`);
}

findDuplicates(array);



