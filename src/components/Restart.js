import Modal from "../UI/Modal";

const Restart = (props) => {
  return (
    <Modal>
      <p className="restart-text">RESTART GAME?</p>
      <div>
        <button onClick={props.cancel} className="btn-cancel-restart">
          No, Cancel
        </button>
        <button onClick={props.restart} className="btn-restart">
          Yes, RESTART
        </button>
      </div>
    </Modal>
  );
};

export default Restart;
