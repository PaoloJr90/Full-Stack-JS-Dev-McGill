const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals);

const animals2 = animals.slice(2);
console.log(animals2);

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

console.log([...animals.slice(2), ...animals.slice(3, animals.length - 1)]);

console.log(animals.slice(2, 4));