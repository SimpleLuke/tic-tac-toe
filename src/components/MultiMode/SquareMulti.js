import crossIcon from "../../assets/icon-x.svg";
import circleIcon from "../../assets/icon-o.svg";
import xOutline from "../../assets/icon-x-outline.svg";
import oOutline from "../../assets/icon-o-outline.svg";

import { useEffect, useState } from "react";

const Square = (props) => {
  const [winSquare, setWinSquare] = useState(false);

  useEffect(() => {
    if (props.winningcombo.length > 0) {
      props.winningcombo[0].includes(props.index) && setWinSquare(true);
    } else {
      setWinSquare(false);
    }
  }, [props.winningcombo]);

  return (
    <div
      className={
        winSquare ? (props.winner === "x" ? "win-mask-x" : "win-mask-o") : ""
      }
    >
      <div
        className={`square ${
          !winSquare
            ? "square-normal"
            : props.winner === "x"
            ? "winSquare-x"
            : "winSquare-o"
        } ${!props.placed && !props.winner ? "square-active" : ""} `}
        {...props}
      >
        {props.turn === "x" &&
          props.playerMark === "x" &&
          !props.placed &&
          !props.winner && (
            <img className="outline" src={xOutline} alt="x ouline" />
          )}
        {props.turn === "o" &&
          props.playerMark === "x" &&
          !props.placed &&
          !props.winner && (
            <img className="outline" src={oOutline} alt="o ouline" />
          )}
        {props.turn === "o" &&
          props.playerMark === "o" &&
          !props.placed &&
          !props.winner && (
            <img className="outline" src={oOutline} alt="o ouline" />
          )}
        {props.turn === "x" &&
          props.playerMark === "o" &&
          !props.placed &&
          !props.winner && (
            <img className="outline" src={xOutline} alt="x ouline" />
          )}

        {props.x ? (
          <img
            className={winSquare ? "win-icon-transparent" : ""}
            src={crossIcon}
            alt="cross icon"
          />
        ) : props.o ? (
          <img
            className={winSquare ? "win-icon-transparent" : ""}
            src={circleIcon}
            alt="circle icon"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Square;
