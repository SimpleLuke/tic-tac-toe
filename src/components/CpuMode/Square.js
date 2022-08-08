import crossIcon from "../../assets/icon-x.svg";
import circleIcon from "../../assets/icon-o.svg";
import xOutline from "../../assets/icon-x-outline.svg";
// import oOutline from "../assets/icon-o-outline.svg";

const Square = (props) => {
  return (
    <div
      className={`square ${!props.placed && !props.winner && "square-active"}`}
      {...props}
    >
      {props.turn === "x" && !props.placed && !props.winner && (
        <img className="outline" src={xOutline} alt="x ouline" />
      )}

      {props.x ? (
        <img src={crossIcon} alt="cross icon" />
      ) : props.o ? (
        <img src={circleIcon} alt="circle icon" />
      ) : (
        ""
      )}
    </div>
  );
};

export default Square;
