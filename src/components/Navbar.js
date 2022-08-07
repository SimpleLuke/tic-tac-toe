import resetIcon from "../assets/icon-restart.svg";
import logo from "../assets/logo.svg";

const Navbar = (props) => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <div className="turn-block">
        <p className="sign">{props.turn}</p>
        <p>Turn</p>
      </div>
      <button onClick={props.showRestart}>
        <img src={resetIcon} alt="restart" />
      </button>
    </nav>
  );
};

export default Navbar;
