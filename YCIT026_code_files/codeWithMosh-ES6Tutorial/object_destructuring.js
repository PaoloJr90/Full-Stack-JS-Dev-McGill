const address = {
  street: "",
  city: "",
  country: "",
};

// to extract value of each property, we usually store them in variables
// example:
const street1 = address.street;
const city1 = address.city;
const country1 = address.country;

// but with object destructuring, we can do this in one line!
const { street, city, country } = address;

// we can also rename the variables
const { street: st } = address;
// now st is a variable that holds the value of address.street
