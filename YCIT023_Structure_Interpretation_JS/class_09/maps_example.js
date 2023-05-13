// create a map. a map is a collection of key-value pairs
const provinces = new Map();

// use set() to add key-value pairs. the key can be any type. the value can be any type.
provinces.set('BC', 'British Columbia');
provinces.set('ON', 'Ontario');
provinces.set('QC', 'Quebec');

console.log(provinces.get('BC'));

// use delete() to remove a key-value pair. we use the key to delete the pair.
provinces.delete('BC');

// the new map does not contain the deleted key-value pair
console.log(provinces.get('BC'));