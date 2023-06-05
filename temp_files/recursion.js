// recursion example 1

let countDownFrom = (num) => {
    if (num === 0) return;
    console.log(num);
    countDownFrom(num - 1);
}

countDownFrom(10);
// output: 10 9 8 7 6 5 4 3 2 1

// recursion example 2
let categories = [
    { id: 'animals', parent: null },
    { id: 'mammals', parent: 'animals' },
    { id: 'cats', parent: 'mammals' },
    { id: 'dogs', parent: 'mammals' },
    { id: 'chihuahua', parent: 'dogs' },
    { id: 'labrador', parent: 'dogs' },
    { id: 'persian', parent: 'cats' },
    { id: 'siamese', parent: 'cats' }
]

let makeTree = (categories, parent) => {
    let node = {}; // create a new object
    categories
        .filter(c => c.parent === parent); // filter the categories array
        // .forEach(c =>
        //     node[c.id] = makeTree(categories, c.id)); // for each category, create a new node
    return node;
}

console.log

// console.log(
//     JSON.stringify(
//         makeTree(categories, null), null, 2) // null, 2 is for indentation
// );





// output:
// {
//   "animals": {
//     "mammals": {
//       "cats": {
//         "persian": {},
//         "siamese": {}
//       },
//       "dogs": {
//         "chihuahua": {},
//         "labrador": {}
//       }
//     }
//   }
// }
