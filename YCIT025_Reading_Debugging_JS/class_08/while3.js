const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;

while (cars[i]) {
    console.log(cars[i]);
    i++;
}
console.log("================================================")

// using forEach method of array
// forEach method syntax is as follows 
// array.forEach(function(currentValue, index, arr), thisValue)
cars.forEach((car)=>{
    console.log(car);
})

console.log("================================================")
