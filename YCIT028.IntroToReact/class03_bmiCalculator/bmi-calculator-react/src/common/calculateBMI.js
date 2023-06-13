function calculateBmi(height, weight) {
  height = height / 100;
  let result = weight / (height * height);

  return result.toFixed(2);
}

export default calculateBmi;
