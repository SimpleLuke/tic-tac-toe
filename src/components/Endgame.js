import Modal from "../UI/Modal";
import oIcon from "../assets/icon-o.svg";
import xIcon from "../assets/icon-x.svg";

const Endgame = (props) => {
  return (
    <Modal>
      <p className="win-lose-text">
        {props.winner === "x"
          ? "YOU WON!"
          : props.winner === "o"
          ? "OH NO, YOU LOST..."
          : ""}
      </p>
      <div>
        {props.winner === "o" ? (
          <img src={oIcon} alt="O icon" />
        ) : props.winner === "x" ? (
          <img src={xIcon} alt="X icon" />
        ) : (
          ""
        )}

        {props.winner !== "draw" ? (
          <p
            className={`who-win-text ${
              props.winner === "o" ? "circle-win" : "cross-win"
            }`}
          >
            TAKES THE ROUND
          </p>
        ) : (
          <p className="who-win-text draw-win">ROUND TIED</p>
        )}
      </div>
      <button className="next-btn" onClick={props.onRestart}>
        NEXT ROUND
      </button>
    </Modal>
  );
};

export default Endgame;
