const person = { fname: "John", lname: "Doe", age: 25 };


console.log("=====================For-in in Object===============================");

for (let key in person) {
  console.log('key=', key);
  const value = person[key];
  console.log('value=', value);
}


console.log("=====================For-in in Array===============================");

const array1 = ['item1', 'item2', 'item3'];

for (let key in array1) {
    console.log('key=', key);
    const value = array1[key];
    console.log('value=', value);
}