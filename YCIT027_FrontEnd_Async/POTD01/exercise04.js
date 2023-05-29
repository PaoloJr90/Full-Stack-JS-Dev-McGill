// Counting population of a variable-sized, multi-dimensional array of objects

// template object for testing
const obj = {
  name: String(),
  population: Number(),
  temp: Number(),
  currency: String(),
};

// create some sample objects to test the function
const obj1 = {
  name: "Sydney",
  population: 5000000,
  temp: 3.0,
  currency: "AUD",
};

const obj2 = {
  name: "Melbourne",
  population: 4000000,
  temp: 2.5,
  currency: "AUD",
};

const obj3 = {
  name: "Perth",
  population: 2000000,
  temp: 12.0,
  currency: "AUD",
};

// create a multi-dimensional array of the objects with null values
const raw_array = [
  [null, obj1, obj2, obj3],
  [obj1, obj2, obj3, null],
  [obj1, null, obj2, obj3],
];

// function to count the population of a variable-sized, multi-dimensional array of objects where the temp is <= 10.0
const countPopulation = (raw_array) => {
  let populationMap = {};
  let ans = 0;

  // nested for loop to iterate through the multi-dimensional array
  for (let i = 0; i < raw_array.length; i++) {
    for (let j = 0; j < raw_array[i].length; j++) {
      // if the object is not null and the temp is <= 10.0, add the population to the ans
      if (raw_array[i][j] !== null && raw_array[i][j].temp <= 10.0) {
        // check if the city name is already in the populationMap
        const cityName = raw_array[i][j].name;
        // if not, add it to the populationMap and add the population to the ans
        if (!populationMap.hasOwnProperty(cityName)) {
          populationMap[cityName] = true;
          ans += raw_array[i][j].population;
        }
      }
    }
  }

  console.log(ans);
  return ans;
};

countPopulation(raw_array);
