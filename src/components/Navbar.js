import resetIcon from "../assets/icon-restart.svg";
import logo from "../assets/logo.svg";

const Navbar = (props) => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <div>
        <p>{props.turn} Turn</p>
      </div>
      <button onClick={props.reset}>
        <img src={resetIcon} alt="reset" />
      </button>
    </nav>
  );
};

export default Navbar;
