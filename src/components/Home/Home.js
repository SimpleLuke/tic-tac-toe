import logo from "../../assets/logo.svg";
import xIcon from "../../assets/icon-x.svg";
import oIcon from "../../assets/icon-o.svg";

import { useState } from "react";

const Home = (props) => {
  const [mark, setMark] = useState("x");

  const pickHandler = () => {
    console.log(mark);
    if (mark === "x") {
      setMark("o");
    } else {
      setMark("x");
    }
  };
  return (
    <div className="home-container">
      <img className="logo-home" src={logo} alt="Logo" />
      <div className="pick-box">
        <p className="pick-box-text--top">PLAYER 1’S MARK</p>
        <div className="pick-box-xo">
          <img src={xIcon} className="under-marks--x" alt="under x" />
          <img src={oIcon} className="under-marks--o" alt="under o" />
          <div
            className={`pick-box-selected-left ${
              mark === "x" ? "pick-box-selected-x" : ""
            }`}
            onClick={pickHandler}
          >
            <img
              className={`pick-box-xo--x ${
                mark === "x"
                  ? "pick-box-xo--Selected"
                  : "pick-box-xo--notSelected"
              }`}
              src={xIcon}
              alt="X icon"
            />
          </div>
          <div
            className={`pick-box-selected-right ${
              mark === "o" ? "pick-box-selected-o" : ""
            }`}
            onClick={pickHandler}
          >
            <img
              className={`pick-box-xo--o ${
                mark === "o"
                  ? "pick-box-xo--Selected"
                  : "pick-box-xo--notSelected"
              }`}
              src={oIcon}
              alt="O icon"
            />
          </div>
        </div>
        <p className="pick-box-text--bottom">REMEMBER : X GOES FIRST</p>
      </div>
      <button onClick={props.cpuMode} className="btn-newgame-cpu">
        NEW GAME (VS CPU)
      </button>
    </div>
  );
};

export default Home;
