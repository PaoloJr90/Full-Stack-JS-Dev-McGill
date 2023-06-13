import { useEffect, useState } from "react";
import { colors, colors2, colors3, colors4 } from "./common/colors";

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

function AppChangeColorSet() {
  return (
    <button
      onClick={() => {
        const colors = generateRandomColorsArray(10);
        {
          colors.map((color, index) => {
            return (
              <button
                key={`color-${index}`}
                style={{ backgroundColor: color }}
                className={index}
              ></button>
            );
          });
        }
      }}
    >
      Switch Color Set!
    </button>
  );
}

export default AppChangeColorSet;
