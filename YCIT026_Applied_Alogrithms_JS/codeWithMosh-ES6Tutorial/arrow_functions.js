// regular function
const square = function (number) {
  return number * number;
};

// ES6 arrow function syntax
const square1 = (number) => number * number;
// if there is only one parameter, you can omit the parentheses
// if there is only one statement/line, you can omit the curly braces and the return keyword

// example
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

// regular function
const activeJobs = jobs.filter(function (job) {
  return job.isActive;
});
// ES6 arrow function syntax
const activeJobs1 = jobs.filter((job) => job.isActive);
