import Modal from "../UI/Modal";
import oIcon from "../assets/icon-o.svg";

const Endgame = (props) => {
  return (
    <Modal>
      <p className="win-lose-text">OH NO, YOU LOST...</p>
      <div>
        <img src={oIcon} alt="O icon" />
        <p className="who-win-text">TAKES THE ROUND</p>
      </div>
      <button className="next-btn" onClick={props.onClose}>
        NEXT ROUND
      </button>
    </Modal>
  );
};

export default Endgame;
