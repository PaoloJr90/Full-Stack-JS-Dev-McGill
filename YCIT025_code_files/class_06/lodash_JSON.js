const _ = require('lodash');



const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'human'];

const animals2 = animals;
const animals3 = ['ant', 'bison', 'camel', 'duck', 'elephant', 'human'];
const animals4 = [...animals]; // shallow clone

const animals5 = _.cloneDeep(animals); // deep clone
const animals6 = JSON.parse(JSON.stringify(animals)); // deep clone




console.log('animals == animals2', animals == animals2);
console.log('animals === animals2', animals === animals2);
console.log('animals == animals3', animals == animals3);
console.log('animals === animals3', animals === animals3);


animals.push('Lion');

console.log(animals2);
console.log(animals4);
console.log(animals5);
console.log(animals6);