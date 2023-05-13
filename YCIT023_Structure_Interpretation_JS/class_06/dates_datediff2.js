// import {differenceInMonths} from 'date-fns'; it will be used in the code file.
const {differenceInMonths} = require('date-fns');

const date1 = new Date('2022-08-10');
const date2 = new Date('2020-02-24');

const difference = differenceInMonths(date1, date2);

console.log(difference); // 29

// example using function to calculate days between two dates
const _MS_PER_DAY = 1000 * 60 * 60 * 24;

let a = new Date(2023, 00, 01);
let b = new Date(2023, 02, 20);

// Discard the time and time-zone information.
const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
let diff = Math.floor((utc2 - utc1) / _MS_PER_DAY)