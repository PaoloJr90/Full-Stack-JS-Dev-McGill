// date-fns is a library that provides the most used date functions in a very lightweight package (2kb).
// below is a simple example of how to use it.
const {format} = require('date-fns');

const today = format(new Date(), 'dd.MM.yyyy');

console.log(format(new Date(), 'dd.MM.yyyy'));
console.log(format(new Date(), 'yyyy-MM-dd'));

// shortcut to use backticks (`) instead of single quotes (') with the ${} syntax to insert variables and print them out.
console.log(`Today's date: ${format(new Date(), 'MMMM.do.')}`);