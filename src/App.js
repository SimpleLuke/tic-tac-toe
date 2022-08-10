import CpuMode from "./components/CpuMode/CpuMode";
import Home from "./components/Home/Home";

import { Fragment, useState } from "react";

function App() {
  const [mode, setMode] = useState("home");
  return (
    <Fragment>
      {mode === "home" && <Home />}
      {mode === "cpu" && <CpuMode />}

      <footer>
        <a href="lukelai.tech">
          <p>&copy; 2022 Luke Lai</p>
        </a>
      </footer>
    </Fragment>
  );
}

export default App;
