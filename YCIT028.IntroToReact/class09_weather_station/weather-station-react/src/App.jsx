import { useContext } from "react";
import "./App.css";
import AppBody from "./components/AppBody";
import Headers from "./components/Headers";
import { AppContext } from "./context/AppContext";

function App() {
  const hi = useContext(AppContext);
  console.log(hi);
  return (
    <div className="app">
      <main>
        <Headers />

        <AppBody />
      </main>
    </div>
  );
}

export default App;
