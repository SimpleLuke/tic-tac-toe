import Modal from "../../UI/Modal";
import oIcon from "../../assets/icon-o.svg";
import xIcon from "../../assets/icon-x.svg";

const Endgame = (props) => {
  return (
    <Modal>
      <p className="win-lose-text">
        {props.winner === (props.playerMark === "x" ? "x" : "o")
          ? "YOU WON!"
          : props.winner === (props.playerMark === "x" ? "o" : "x")
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
      <div className="endgame-btn-container">
        <button className="reset-btn" onClick={props.onReset}>
          QUIT
        </button>
        <button className="next-btn" onClick={props.onRestart}>
          NEXT ROUND
        </button>
      </div>
    </Modal>
  );
};

export default Endgame;
