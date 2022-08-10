import logo from "../../assets/logo.svg";
import xIcon from "../../assets/icon-x.svg";
import oIcon from "../../assets/icon-o.svg";

const Home = (props) => {
  return (
    <div className="home-container">
      <img className="logo-home" src={logo} alt="Logo" />
      <div className="pick-box">
        <p className="pick-box-text--top">PLAYER 1’S MARK</p>
        <div className="pick-box-xo">
          <div className="pick-box-selected"> </div>
          <img
            className="pick-box-xo--x pick-box-xo--Selected"
            src={xIcon}
            alt="X icon"
          />

          <div>
            <img
              className="pick-box-xo--o pick-box-xo--notSelected"
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
