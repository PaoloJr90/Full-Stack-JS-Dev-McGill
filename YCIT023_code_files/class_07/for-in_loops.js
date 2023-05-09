// for-in loop will iterate through the properties of an object
// (if a property is enumerable)
// if an array or string type variable is passed to a for-in loop, index values will be returned
//for (indexInitializationin array ) {
//    statements
// }
// used if there is a need to access properties/keys of an object. Outputs the index of each member of the iterable.

// example of for-in loop iterating through an object
let Obj = {
    a: 1,
    b: 2
};

for (let prop in Obj) {
    console.log(`${prop}: ${Obj[prop]}`);
}
// output: a: 1 b: 2

// example of for-in loop iterating through an object
class Icon {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }
}

for (let prop in new Icon(128, 32)) {
    console.log(prop);
}
//output: width height