const Records = ({ playerMark, player, tie, cpu }) => {
  return (
    <section className="records-container">
      <div className={playerMark === "x" ? "records-you" : "records-cpu"}>
        <p className="records-role">X (YOU)</p>
        <p className="records-score">{player}</p>
      </div>
      <div className="records-tie">
        <p className="records-role">TIES</p>
        <p className="records-score">{tie}</p>
      </div>
      <div className={playerMark === "x" ? "records-cpu" : "records-you"}>
        <p className="records-role">O (CPU)</p>
        <p className="records-score">{cpu}</p>
      </div>
    </section>
  );
};

export default Records;
