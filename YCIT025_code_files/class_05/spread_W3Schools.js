// example of spread operator used on objects (from W3Schools)
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}
console.log('myVehicle', myVehicle);
const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}
console.log('updateMyVehicle', updateMyVehicle);

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle }
console.log('myUpdatedVehicle', myUpdatedVehicle);
const myUpdatedVehicle1 = { ...updateMyVehicle, ...myVehicle }
console.log('myUpdatedVehicle1', myUpdatedVehicle1);
const myUpdatedVehicle2 = {
    type: 'newType',
    ...myVehicle,
    ...updateMyVehicle,
    prop1: 'someValue',
    prop2: 'someValue2',
}
console.log('myUpdatedVehicle2', myUpdatedVehicle2);