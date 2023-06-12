import React from "react";
import colors from "./common/colors";
import "./app.scss";

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

console.log(generateRandomColorsArray(10));

class AppClass extends React.Component {
  constructor(props) {
    super();
    //console.log("constructor");
    this.state = {};
  }

  componentDidMount() {
    //console.log("componentDidMount");
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
    //console.log(randomIndex);
    this.setState({ currentIndexColor: randomIndex });
  }
  render() {
    //console.log("render");
    return (
      <div id="app">
        <h1 id="current-color">{colors[this.state.currentIndexColor]}</h1>
        <button
          key={"changePalette"}
          onClick={() => {
            console.log("clicked!");
            const newColors = generateRandomColorsArray(10);
            this.setState({ colors: newColors });
            console.log(newColors);
          }}
        >
          Get new colors!
        </button>

        <div className="colors">
          {colors.map((color, index) => {
            return (
              <button
                key={`color-${index}`}
                style={{ backgroundColor: color }}
                className={
                  index === this.state.currentIndexColor ? "active" : ""
                }
                onClick={() => {
                  document.body.style.backgroundColor = colors[index];
                  this.setState({ currentIndexColor: index });
                  console.log("clicked!", index);
                }}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AppClass;
