import CpuMode from "./components/CpuMode/CpuMode";
import Home from "./components/Home/Home";

import { Fragment, useState, useEffect } from "react";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("stage"));
  const [playerMark, setPlayerMark] = useState("x");

  useEffect(() => {
    localStorage.setItem("stage", mode === "" ? "home" : mode);
    setMode(localStorage.getItem("stage"));
    console.log(localStorage.getItem("stage"));
  }, [mode]);

  const enterCpuHandler = () => {
    setMode("cpu");
  };

  const enterHomeHandler = () => {
    setMode("home");
  };

  const playerMarkHandler = (mark = "x") => {
    setPlayerMark(mark);
  };
  return (
    <Fragment>
      {mode === "home" && (
        <Home cpuMode={enterCpuHandler} playerMark={playerMarkHandler} />
      )}
      {mode === "cpu" && (
        <CpuMode home={enterHomeHandler} playerMark={playerMark} />
      )}

      <footer>
        <a href="lukelai.tech">
          <p>&copy; 2022 Luke Lai</p>
        </a>
      </footer>
    </Fragment>
  );
}

export default App;
