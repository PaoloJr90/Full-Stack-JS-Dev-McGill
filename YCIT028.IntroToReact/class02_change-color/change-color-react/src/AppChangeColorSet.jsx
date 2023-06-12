import { useEffect, useState } from "react";

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateRandomColorsArray(length) {
  const colors = [];
  for (let i = 0; i < length; i++) {
    const randomColor = generateRandomColor();
    colors.push(randomColor);
  }
  return colors;
}
//   console.log(generateRandomColorsArray(10));

// function AppChangeColorSet() {
//   return (

//   );
// }

// export default AppChangeColorSet;
