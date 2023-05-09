// !! is used to coerce a value to its boolean equivalent
// it is called double negation
// we would need to understand the truthy and falsy values
// equivalent to using Boolean() constructor
console.log("!!null", !!null);
console.log("!!undefined", !!undefined);
console.log('!!""', !!"");
console.log("!!0", !!0);
console.log("!!NaN", !!NaN);
console.log('!!" "', !!" ");
console.log("!!{}", !!{});
console.log("!![]", !![]);
console.log("!!1", !!1);
console.log("!!-1", !!-1);
console.log("!![].length", !![].length);
console.log("================using Boolean() constructor=============");
console.log("Boolean(null)", Boolean(null));
console.log("Boolean('')", Boolean(""));
console.log("Boolean(' ')", Boolean(" "));
console.log("Boolean({})", Boolean({}));
console.log("Boolean([])", Boolean([]));
console.log("Boolean([].length)", Boolean([].length));
