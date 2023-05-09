// import lodash package
// _ is a convention for lodash
const _ = require('lodash');

const person = {
    name: 'Jason',
    age: 38,
    properties: {
        mainProperty: 'MacBookPro',
        showNumberOfProperties: () => {
            return 5;
        }
    },
    printName: () => {
        return 38;
    },
    family1: {
        testKey: {
            otherKey: {
                anotherKey: 'anotherKeyValue',
            }
        }
    }
};

console.log('person', person);

console.log('person.printName()', person.printName());

console.log('person.name', person.name);
console.log('person.family', person.family);
// console.log('person.family.testKey', person.family.testKey);
// console.log('person.family.testKey', person.family.testKey.otherKey.anotherKey);
console.log('person.family.testKey', person?.family?.testKey);
console.log('person?.family?.testKey?.otherKey?.anotherKey', person?.family?.testKey?.otherKey?.anotherKey);
console.log('person?.family1?.testKey?.otherKey?.anotherKey', person?.family1?.testKey?.otherKey?.anotherKey);

// oprtional chaining is used to check if a property is present in an object
// if the property is not present, the code will not throw an error
// if the property is present, the code will execute
// optional chaining syntax: object?.property?.property
if (person?.family?.testKey?.otherKey?.anotherKey) {
    console.log('another key is present family', person.family.testKey.otherKey.anotherKey);
}
if (person?.family1?.testKey?.otherKey?.anotherKey) {
    console.log('another key is present family1', person.family1.testKey.otherKey.anotherKey);
}

person.addresses = [
    {
        civic: '1',
        street: '1'
    },
    {
        civic: '2',
        street: '2'
    },
    {
        civic: '3',
        street: '4',
    },
];

console.log(person);

console.log('person.addresses[0].street', person.addresses[0].street);
console.log('person.addresses[1].street', person.addresses[1].street);
console.log('person.addresses[2].street', person.addresses[2].street);
const personsAddress4 = _.get(person, 'addresses[3].street', null);

if(personsAddress4){
    console.log('Horray it is present')
} else {
    throw new Error('personsAddress4 is not present')
}


_.set(person, 'addresses[5].street', 'street5');
console.log(person);
// console.log('person.addresses[4].street', person.addresses[4].street);

console.log(personsAddress4);