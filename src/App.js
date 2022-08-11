import CpuMode from "./components/CpuMode/CpuMode";
import Home from "./components/Home/Home";
import MultiMode from "./components/MultiMode/MultiMode";

import { Fragment, useState, useEffect } from "react";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("stage") || "home");
  const [playerMark, setPlayerMark] = useState(
    mode === "home" ? "x" : localStorage.getItem("playerMark")
  );

  useEffect(() => {
    localStorage.setItem("stage", mode === "null" ? "home" : mode);
    setMode(localStorage.getItem("stage"));
    console.log(localStorage.getItem("stage"));
    localStorage.setItem("playerMark", playerMark);
  }, [mode, playerMark]);

  const enterCpuHandler = () => {
    setMode("cpu");
  };
  const enterMultiHandler = () => {
    setMode("multi");
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
        <Home
          cpuMode={enterCpuHandler}
          multiMode={enterMultiHandler}
          playerMark={playerMarkHandler}
        />
      )}
      {mode === "cpu" && <CpuMode mode={mode} home={enterHomeHandler} />}
      {mode === "multi" && <MultiMode mode={mode} home={enterHomeHandler} />}

      <footer>
        <a href="lukelai.tech">
          <p>&copy; 2022 Luke Lai</p>
        </a>
      </footer>
    </Fragment>
  );
}

export default App;
