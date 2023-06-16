import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todo-items")) || []
  );

  // useEffect(() => {
  //   console.log("useEffect is called");
  // }, []);

  useEffect(() => {
    localStorage.setItem("todo-items", JSON.stringify(items));
  }, [items]);

  return (
    <div id="app">
      <h1>My Todo 🗒️</h1>

      <div className="container">
        <form>
          <h2>Add Item</h2>
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="form-control"
            autoComplete="off"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          <button
            onClick={(event) => {
              event.preventDefault();
              if (input === "") {
                alert("input value cannot be empty");
                return;
              }
              const newItems = [...items];
              newItems.push(input);
              setItems(newItems);
              setInput("");
            }}
          >
            Add
          </button>
          <button
            className="red"
            onClick={(event) => {
              event.preventDefault();
              setItems([]);
            }}
          >
            Reset
          </button>
        </form>

        <div className="items">
          <h2>My Items</h2>
          <ol>
            {items.map((item, index) => {
              return (
                <li key={`item-${index}`}>
                  <h3>{item}</h3>
                  <button
                    className="delete"
                    onClick={() => {
                      // console.log(items, index);
                      const newItems = items.filter((item, indexItem) => {
                        return index !== indexItem;
                      });
                      // const newItems = [
                      //   ...items.slice(0, index),
                      //   ...items.slice(index + 1, items.length),
                      // ];
                      setItems(newItems);
                    }}
                  ></button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
