import { useState } from "react";
import "./app.scss";
import BmiForm from "./components/BMIform";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  return (
    <>
      <div className="container">
        <Header />

        <BmiForm
          height={height}
          setHeight={setHeight}
          setWeight={setWeight}
          weight={weight}
          setResult={setResult}
        />

        <Result result={result} />
      </div>
    </>
  );
}

export default App;
