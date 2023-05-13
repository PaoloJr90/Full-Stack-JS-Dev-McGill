const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

for (let i = 0; i < salad.length; i++) {
    if (salad[i] == 'Jason') {
        console.log(`index of ${'Jason'} is ${i}`)
    }
}

console.log(`Length of salad is ${salad.length}`);

console.log("================================================================");


// Add item into array => push
salad.push('Jason');

for (let i = 0; i < salad.length; i++) {
    if (salad[i] == 'Jason') {
        console.log(`index of ${'Jason'} is ${i}`)
    }
}

console.log(`Length of salad is ${salad.length}`);


console.log("================================================================");


// Add item at the first of array unshift
salad.unshift('Jafari');

for (let i = 0; i < salad.length; i++) {
    if (salad[i] == 'Jason') {
        console.log(`index of ${'Jason'} is ${i}`)
    }
}

console.log(`Length of salad is ${salad.length}`);

console.log(salad);

console.log("================================================================");

// To remove last item of array pop()

salad.pop();


for (let i = 0; i < salad.length; i++) {
    if (salad[i] == 'Jason') {
        console.log(`index of ${'Jason'} is ${i}`)
    }
}

console.log(`Length of salad is ${salad.length}`);
console.log(salad);

console.log("================================================================");

// To remove first item of array shift()

salad.shift();


for (let i = 0; i < salad.length; i++) {
    if (salad[i] == 'Jason') {
        console.log(`index of ${'Jason'} is ${i}`)
    }
}

console.log(`Length of salad is ${salad.length}`);
console.log(salad);

salad[4] = null;
console.log(salad);

const salad2 = [];
for (let i = 0; i < salad.length; i++) {
    if (salad[i] != '🥕') {
        salad2.push(salad[i])
    }
}
console.log(salad2);