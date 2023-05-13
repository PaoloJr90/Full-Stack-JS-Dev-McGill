const person = { fname: "John", lname: "Doe", age: 25 };

console.log("=====================Object.keys================================");

//using object constructor. Object.keys() returns an array of keys. 
//the keys parameter is the object to get the keys from
const keys = Object.keys(person);
const valuesOfKeys = []
keys.forEach((key, index) => {
    console.log('key=', key);
    const value = person[key];
    console.log('value=', value);
    valuesOfKeys.push(value);
})

console.log('keys=', keys);
console.log('valuesOfKeys=', valuesOfKeys);

console.log("=====================Object.values================================");

//using object constructor. Object.values() returns an array of values.
//the values parameter is the object to get the values from
const values = Object.values(person);

console.log('values=', values);
