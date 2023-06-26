import { useContext } from "react";
import "./App.css";
import AppBody from "./components/AppBody";
import Headers from "./components/Headers";
import { AppContext } from "./context/AppContext";

function App() {
  const [state, setState] = useContext(AppContext);
  // console.log(hi);
  return (
    <div
      className={
        state?.selectedCityInfo?.main?.temp > Number(20 + 273.15)
          ? "app warm"
          : "app"
      }
    >
      <main>
        <Headers />

        <AppBody />
      </main>
    </div>
  );
}

export default App;
