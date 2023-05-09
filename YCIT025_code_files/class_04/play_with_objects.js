console.log("Hello Session4");

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
    }
};

console.log('person', person);

const person2 = person;
// the spread (...) operator is used to copy the object and create a new object
const person3 = { ...person };
const person4 = {
    ...person,
    properties: {
        ...person.properties
    }
}
console.log('person2', person2);

person2.name = 'Jason2';
person2.family = 'Jafari2';
person2.properties.testKey = 'testKey';
console.log('person2', person2);
console.log('person', person);
console.log('person3', person3);
console.log('person4', person4);

console.log(person3.properties == person2.properties);
console.log(person4.properties == person2.properties);
