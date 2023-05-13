// Array destructuring

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'human'];

const camel = animals[2];

console.log(camel);

const [var1, var2, var3] = animals;

console.log('var1', var1);
console.log('var2', var2);
console.log('var3', var3);

const [, , var_23] = animals;
const [, , , , var_24, var_25 = 'var_25 default_value'] = animals;

console.log('var_23', var_23)
console.log('var_24', var_24)
console.log('var_25', var_25)

const [, ...jason] = animals;
console.log(jason);

