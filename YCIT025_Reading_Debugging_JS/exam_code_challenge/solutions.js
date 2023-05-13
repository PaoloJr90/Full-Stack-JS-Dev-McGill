// Task1
export function simpleArraySum(arrayInput) {
  let sum = 0;
  for (let x in arrayInput) {
    sum += arrayInput[x];
  }
  return sum;
}


// Task2
export function calculateTeamScore(arrayInput) {
  let sum = 0;
  for (let x in arrayInput) {
    if (arrayInput[x] === 'win') {
      sum += 3;
    } else if (arrayInput[x] === 'draw') {
      sum += 1;
    }
    else {
      sum += 0;
    }
  }
  return sum;
}


// Task3
export function findMinMax(arrayInput) {
  let min = arrayInput[0];
  let max = arrayInput[0];
  for (let i = 0; i < arrayInput.length; i++) {
    if (arrayInput[i] <= min) {
      min = arrayInput[i];
    }
    if (arrayInput[i] >= max) {
      max = arrayInput[i];
    }
  }
  return [min, max];
}
