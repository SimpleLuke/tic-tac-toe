import Modal from "../UI/Modal";

const Restart = () => {
  return (
    <Modal>
      <p className="restart-text">RESTART GAME?</p>
      <div>
        <button className="btn-cancel-restart">No, Cancel</button>
        <button className="btn-restart">Yes, RESTART</button>
      </div>
    </Modal>
  );
};

export default Restart;
