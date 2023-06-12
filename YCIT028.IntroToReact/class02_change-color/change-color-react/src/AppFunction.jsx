import { useEffect, useState } from "react";
import colors from "./common/colors";

function AppFunction() {
  // useEffect is a hook that runs after the first render
  // it accepts a callback function that will run after the first render
  // useEffect(() => {
  //   console.log("h1");
  //   const randomIndex = Math.floor(Math.random() * colors.length);

  //   document.body.style.backgroundColor = colors[randomIndex];
  //   console.log(randomIndex);
  // }, []);
  const [state, setState] = useState({ currentIndexColor: 0 });
  console.log(state);
  console.log(setState);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
    setState({ currentIndexColor: randomIndex });
  }, []);

  return (
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
                console.log("clicked!", index);
                setState({ currentIndexColor: index });
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default AppFunction;
