// Create an Amount
// given an arroy of coins, write a function to computer the number of way you can make that amount using those coins
// assume that you have infinite number of each kind of coin

const coins = [1, 2, 3];
const amount = 4;

const coinsCombination = (coins, amount) => {
  // create an array of size amount + 1 and fill it with 0
  // it is of length amount + 1 because we want to include 0
  // it is used to store the number of ways to make each amount
  let array = new Array(amount + 1).fill(0);
  // set the first element to 1
  // this is because there is only 1 way to make 0 (by not using any coins)
  array[0] = 1;

  // iterate through the coins array to get the number of ways to make each amount
  for (let coin of coins) {
    // iterate through the new array from the coin value to the amount
    // this is because we want to find the number of ways to make each amount
    for (let i = coin; i <= amount; i++) {
      //
      array[i] += array[i - coin];
    }
  }

  console.log(array[amount]);
  return array[amount];
};

coinsCombination(coins, amount);

// we could also use recursion.
