import { useEffect, useState } from "react";
import colors from "./common/colors";
import "./app.scss";

function AppFooter() {
  const [state, setState] = useState({ currentIndexColor: 0 });
  console.log(state);
  console.log(setState);

  return (
    <footer className="footer"> PJ Angeloni - First React Assignment</footer>
  );
}

export default AppFooter;
