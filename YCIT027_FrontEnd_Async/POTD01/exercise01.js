// Q1 - Double the Sum

function doubleTheSum(x, y) {
  const ans = (x + y) * 2;
  console.log(ans);
  return ans;
}

doubleTheSum(2, 3);

// Q2 - Add the Remainder

function addRemainder(x) {
  let ans = 0;
  ans += x % 10;
  // console.log(ans);
  return ans;
}

addRemainder(22);

//Q3 - Keep Multiplying

function keepMultiplying(x, n) {
  let ans = 0;
  ans += x ** 2 * n;
  console.log(ans);
  return ans;
}

keepMultiplying(2, 3);

// Q4 - Divide the Product

function divideTheProduct(a) {
  let x = a + 10;
  let y = a - 10;
  let z = a % 10;
  let ans = a / (x * y * z);
  console.log(ans);
  return ans;
}

divideTheProduct(12);
