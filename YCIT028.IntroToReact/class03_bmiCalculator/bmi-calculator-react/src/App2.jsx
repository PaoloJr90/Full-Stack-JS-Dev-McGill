import { useState } from "react";
import "./app.scss";
import Header from "./components/Header";
import BmiForm2 from "./components/BMIform2";
import Result2 from "./components/Result2";

function App2() {
  const [state, setState] = useState({
    height: "",
    weight: "",
    result: "",
  });

  return (
    <>
      <div className="container">
        <Header />

        <BmiForm2 state={state} setState={setState} />

        <Result2 state={state} />
      </div>
    </>
  );
}

export default App2;
