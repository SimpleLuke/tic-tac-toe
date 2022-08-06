import crossIcon from "../assets/icon-x.svg";
import circleIcon from "../assets/icon-o.svg";

const Square = (props) => {
  return (
    <div className="square" {...props}>
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
