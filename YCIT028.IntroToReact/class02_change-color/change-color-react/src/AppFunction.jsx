import { useEffect, useState } from "react";
import colors from "./colors.js";

function AppFunction() {
  // useEffect is a hook that runs after the first render
  // it accepts a callback function that will run after the first render
  // useEffect(() => {
  //   console.log("h1");
  //   const randomIndex = Math.floor(Math.random() * colors.length);

  //   document.body.style.backgroundColor = colors[randomIndex];
  //   console.log(randomIndex);
  // }, []);
  const [state, setState] = useState("");
  // console.log(state);
  // console.log(setState);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
    setState({ currentIndexColor: randomIndex });
  }, []);

  function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  }

  function generateRandomColorsArray(length) {
    const newColors = [];
    for (let i = 0; i < length; i++) {
      const randomColor = generateRandomColor();
      newColors.push(randomColor);
    }
    return newColors;
  }
  // console.log(generateRandomColorsArray(10));

  return (
    <>
      <div id="app">
        <h1 id="current-color">{colors[state.currentIndexColor]}</h1>

        <div className="colors">
          {colors.map((color, index) => {
            return (
              <button
                key={`color-${index}`}
                className={index === state.currentIndexColor ? "active" : ""}
                style={{ backgroundColor: color }}
                onClick={() => {
                  document.body.style.backgroundColor = colors[index];
                  setState({ currentIndexColor: index });
                }}
              ></button>
            );
          })}
        </div>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "20px",
            borderColor: "white",
            borderRadius: "5px",
            borderWidth: "3px",
            width: "200px",
            height: "40px",
          }}
          onClick={() => {
            const newColors = generateRandomColorsArray(colors.length);
            <h1 id="current-color">{newColors[state.currentIndexColor]}</h1>;
            console.log(`new colors: ${newColors}`);

            const newButtons = newColors.map((color, index) => {
              return (
                <button
                  key={`color-${index}`}
                  className={index === state.currentIndexColor ? "active" : ""}
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    document.body.style.backgroundColor = newColors[index];
                    setState({ currentIndexColor: index });
                  }}
                ></button>
              );
            });
            setState({
              buttons: newButtons,
              currentIndexColor: 0,
            });
          }}
        >
          Change Color Set
        </button>
      </div>
    </>
  );
}

export default AppFunction;
